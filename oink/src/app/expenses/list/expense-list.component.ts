import { Component, ViewEncapsulation, Input, SimpleChange, SimpleChanges, OnInit, OnChanges, DoCheck } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import {ExpensesService} from '../../expenses.service';
import Expense from '../expense.model';
// import './expense-list.component.css';

@Component({
    selector: 'app-expenses-list',
    templateUrl: 'expense-list.component.html',
    styleUrls: ['./expense-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class ExpensesListComponent implements OnInit {
    expenses: Expense[] = [];
    displayedColumns: string[] = ['name', 'date', 'amount', 'select'];
    selection = new SelectionModel<Expense>(true, []);

    constructor(private expensesService: ExpensesService) {
        this.expensesService.expensesUpdated.subscribe((newExpense) => this.onExpensesUpdated(newExpense));
    }

    ngOnInit() {
        this.expenses = this.expensesService.expenses;
    }

    onExpensesUpdated(newExpense: Expense) {
        this.expenses = [...this.expenses];
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
