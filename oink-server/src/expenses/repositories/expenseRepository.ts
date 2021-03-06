import { Mongoose, Model } from "mongoose";
import { injectable } from "inversify";
import { ExpenseSchema, IExpense } from "./expenseSchema";
import Expense from "../models/expense";
import ExpenseMapper from "./expenseMapper";
import DbContext from "../../infrastructure/dbContext";
import { ExpenseBaseError, ERROR_CONSTANTS } from "../errors/expenseErrors";
import BaseError from "../../common/errors/error";
import { Left, Right, Either } from "../../lib/simple-fp/either";
import { GetExpensesRequest } from "../contracts/getExpensesRequest";

@injectable()
export default class ExpenseRepository {
    private readonly expenseModel: Model<IExpense>;

    constructor(
        mongoose: Mongoose,
        private readonly expenseMapper: ExpenseMapper) {
        const collectionName = "expense";
        this.expenseModel = mongoose.model(collectionName, ExpenseSchema);
    }

    public async addNewExpense(expense: Expense): Promise<Either<BaseError, Expense>> {
        try {
            const result: IExpense = await this.expenseModel.create(expense);
            return new Right(this.expenseMapper.toModel(result));
        } catch (e) {
            // TODO: log error
            return new Left(new ExpenseBaseError(ERROR_CONSTANTS.GENERIC_DB_ERROR, e.msg));
        }
    }

    public async getExpenses(request: GetExpensesRequest): Promise<Either<BaseError, Expense[]>> {
        try {
            const options = {
                skip: request.paging.getItemsToSkip(),
                limit: request.paging.pageSize,
            };
            console.log(options);

            const result: IExpense[] = await this.expenseModel.find({}, {}, options);
            return new Right(this.expenseMapper.toModels(result));
        } catch (e) {
            // TODO: log error
            console.log(e);
            return new Left(new ExpenseBaseError(ERROR_CONSTANTS.GENERIC_DB_ERROR, e.msg));
        }
    }
}
