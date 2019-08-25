import { injectable } from "inversify";
import ExpenseRepository from "../repositories/expenseRepository";
import Expense from "../models/expense";
import BaseError from "../../common/errors/error";
import { Either } from "../../lib/simple-fp/either";
import { GetExpensesRequest } from "../contracts/getExpensesRequest";

@injectable()
export default class ExpenseService {
    constructor(private readonly expenseRepository: ExpenseRepository) { }

    public async addExpense(expense: Expense): Promise<Either<BaseError, Expense>> {
        return await this.expenseRepository.addNewExpense(expense);
    }

    public async getExpenses(request: GetExpensesRequest): Promise<Either<BaseError, Expense[]>> {
        return await this.expenseRepository.getExpenses(request);
    }
}
