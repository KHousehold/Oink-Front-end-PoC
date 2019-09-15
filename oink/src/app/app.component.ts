import { Component } from '@angular/core';
import Expense from './expenses/expense.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'oink';
}
