import ExpenseRepository from "./repositories/expenseRepository";
import Expense from "./models/expense";

export default class ExpenseService {
    private readonly expenseRepository: ExpenseRepository;

    constructor(expenseRepository: ExpenseRepository) {
        this.expenseRepository = expenseRepository;
    }

    public async addExpense(expense: Expense): Promise<boolean> {
        return await this.expenseRepository.addNewExpense(expense);
    }

    public async getExpenses(): Promise<Expense[]> {
        return await this.expenseRepository.getExpenses();
    }
}
