import { injectable } from "inversify";
import ExpenseRepository from "../repositories/expenseRepository";
import Expense from "../models/expense";
import { Either } from "fp-ts/lib/Either";
import BaseError from "../../infrastructure/errors/error";

@injectable()
export default class ExpenseService {
    constructor(private readonly expenseRepository: ExpenseRepository) { }

    public async addExpense(expense: Expense): Promise<Either<BaseError, Expense>> {
        return await this.expenseRepository.addNewExpense(expense);
    }

    public async getExpenses(): Promise<Either<BaseError, Expense[]>> {
        return await this.expenseRepository.getExpenses();
    }
}
