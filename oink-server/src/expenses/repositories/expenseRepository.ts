import { Mongoose, Model } from "mongoose";
import Expense from "../models/expense";
import { ExpenseSchema, IExpense } from "./expenseSchema";
import ExpenseMapper from "./expenseMapper";

export default class ExpenseRepository {
    private readonly expenseModel: Model<IExpense>;
    private readonly expenseMapper: ExpenseMapper;

    constructor(mongoose: Mongoose, expenseMapper: ExpenseMapper) {
        const collectionName = "expense";
        this.expenseModel = mongoose.model(collectionName, ExpenseSchema);
        this.expenseMapper = expenseMapper;
    }

    public async addNewExpense(expense: Expense): Promise<boolean> {
        try {
            const result: IExpense = await this.expenseModel.create(expense);
            return true;
        } catch (e) {
            // TODO: log error
            // TODO: add more meaningfull error message
            return false;
        }
    }

    public async getExpenses(): Promise<Expense[]> {
        try {
            const result: IExpense[] = await this.expenseModel.find({});
            return this.expenseMapper.toModels(result);
        } catch (e) {
            // TODO: log error
            // TODO: add more meaningfull error message
            return [];
        }
    }
}
