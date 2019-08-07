import uuid from 'uuid/v4';
import numbro from 'numbro';

export default class Expense {
    readonly id: String;
    readonly name: String;
    readonly category: String;
    readonly amount: number;
    readonly subExpenses?: Expense[];

    constructor(id: String, name: String, category: String, amount: number, subExpenses?: Expense[]) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.amount = amount;
        this.subExpenses = subExpenses;
    }

    add(other: Expense): Expense {
        const id = uuid();

        return new Expense(
            id,
            id,
            this.category === other.category ? this.category : "Total",
            numbro(this.amount).add(other.amount).value(),
            [this, other]
        )
    }
}