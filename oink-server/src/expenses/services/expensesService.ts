import { injectable } from "inversify";
import ExpenseRepository from "../repositories/expenseRepository";
import Expense from "../models/expense";

@injectable()
export default class ExpenseService {
    constructor(private readonly expenseRepository: ExpenseRepository) { }

    public async addExpense(expense: Expense): Promise<boolean> {
        return await this.expenseRepository.addNewExpense(expense);
    }

    public async getExpenses(): Promise<Expense[]> {
        return await this.expenseRepository.getExpenses();
    }
}
