import { Mongoose, Model } from "mongoose";
import { injectable } from "inversify";
import { Either, right, left } from "fp-ts/lib/Either";
import { ExpenseSchema, IExpense } from "./expenseSchema";
import Expense from "../models/expense";
import ExpenseMapper from "./expenseMapper";
import DbContext from "../../infrastructure/dbContext";
import { ExpenseBaseError, ERROR_CONSTANTS } from "../errors/expenseErrors";
import BaseError from "../../infrastructure/errors/error";

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
            return right(this.expenseMapper.toModel(result));
        } catch (e) {
            // TODO: log error
            return left(new ExpenseBaseError(ERROR_CONSTANTS.GENERIC_DB_ERROR, e.msg));
        }
    }

    public async getExpenses(): Promise<Either<BaseError, Expense[]>> {
        try {
            const result: IExpense[] = await this.expenseModel.find({});
            return right(this.expenseMapper.toModels(result));
        } catch (e) {
            // TODO: log error
            return left(new ExpenseBaseError(ERROR_CONSTANTS.GENERIC_DB_ERROR, e.msg));
        }
    }
}
