import { Component, ViewChild, ElementRef } from '@angular/core';
import {ExpensesService} from '../../expenses.service';
import Expense from '../expense.model';

@Component({
    selector: 'app-expense-form',
    templateUrl: 'expense-form.component.html',
    styleUrls: ['./expense-form.component.scss']
})

export class ExpenseFormComponent {
    @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
    @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;

    constructor(private expensesService: ExpensesService) {}

    onAddExpense() {
        const expenseName = this.nameInputRef.nativeElement.value;
        const expenseAmount = this.amountInputRef.nativeElement.value;
        const expenseCreatedOn = Date.now();
        const newExpense = new Expense(expenseName, expenseAmount, expenseCreatedOn);
        this.expensesService.addNewExpense(newExpense);
    }
}
