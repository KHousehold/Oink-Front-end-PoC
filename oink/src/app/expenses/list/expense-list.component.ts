import { Component } from '@angular/core';
import Expense from '../expense.model';

@Component({
    selector: 'expenses-list',
    templateUrl: 'expense-list.component.html'
})

export class ExpensesList {
    expenses: Expense[] = [
        new Expense("First expense", 10)
    ];

    constructor() {

    }
}