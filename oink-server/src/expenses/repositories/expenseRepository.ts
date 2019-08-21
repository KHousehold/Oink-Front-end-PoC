import { Mongoose, Model } from "mongoose";
import { injectable } from "inversify";
import { ExpenseSchema, IExpense } from "./expenseSchema";
import Expense from "../models/expense";
import ExpenseMapper from "./expenseMapper";
import DbContext from "../../infrastructure/dbContext";
import { ExpenseBaseError, ERROR_CONSTANTS } from "../errors/expenseErrors";
import BaseError from "../../infrastructure/errors/error";
import { Left, Right, Either } from "../../lib/simple-fp/either";

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

    public async getExpenses(): Promise<Either<BaseError, Expense[]>> {
        try {
            const result: IExpense[] = await this.expenseModel.find({});
            return new Right(this.expenseMapper.toModels(result));
        } catch (e) {
            // TODO: log error
            return new Left(new ExpenseBaseError(ERROR_CONSTANTS.GENERIC_DB_ERROR, e.msg));
        }
    }
}
