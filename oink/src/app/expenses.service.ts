import Expense from './expenses/expense.model';
import { EventEmitter } from '@angular/core';

export class ExpensesService {
    expenses = [new Expense('First expense', 10, Date.now())];
    expensesUpdated = new EventEmitter<Expense>();

    addNewExpense(newExpense: Expense) {
        this.expenses.push(newExpense);
        this.expensesUpdated.emit(newExpense);
    }
}
