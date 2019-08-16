import { Mongoose, Model } from "mongoose";
import Expense from "../models/expense";
import { ExpenseSchema, IExpense } from "./expenseSchema";

export default class ExpenseRepository {
    private readonly expenseModel: Model<IExpense>;

    constructor(mongoose: Mongoose) {
        const collectionName = "expense";
        this.expenseModel = mongoose.model(collectionName, ExpenseSchema);
    }

    public async addNewExpense(expense: Expense): Promise<boolean> {
        try {
            const result: IExpense = await this.expenseModel.create(expense);
            return true;
        } catch (e) {
            //TODO: log error
            return false;
        }
    }
}
