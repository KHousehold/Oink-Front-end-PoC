import { Component, ViewEncapsulation } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import Expense from '../expense.model';
// import './expense-list.component.css';

@Component({
    selector: 'app-expenses-list',
    templateUrl: 'expense-list.component.html',
    styleUrls: ['./expense-list.component.css'],
    encapsulation: ViewEncapsulation.None,
})

export class ExpensesListComponent {
    expenses: Expense[] = [
        new Expense('First expense', 10, new Date()),
        new Expense('First expense', 10, new Date()),
    ];
    displayedColumns: string[] = ['name', 'date', 'amount', 'select'];
    selection = new SelectionModel<Expense>(true, []);

    constructor() {
    }

    getTotalCost() {
        return this.expenses.map(e => e.amount).reduce((acc, value) => acc + value, 0);
    }

    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.expenses.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.expenses.forEach(row => this.selection.select(row));
    }
}
