import { Component } from '@angular/core';
import Expense from '../expense.model';
// import './expense-list.component.css';

@Component({
    selector: 'app-expenses-list',
    templateUrl: 'expense-list.component.html',
    styleUrls: ['./expense-list.component.css']
})

export class ExpensesListComponent {
    expenses: Expense[] = [
        new Expense('First expense', 10, new Date())
    ];
    displayedColumns: string[] = ['name', 'date', 'amount'];

    constructor() {
    }

    getTotalCost() {
        return this.expenses.map(e => e.amount).reduce((acc, value) => acc + value, 0);
    }
}
