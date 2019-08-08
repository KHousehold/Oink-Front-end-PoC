import numbro from "numbro";
import uuid from "uuid/v4";

export default class Expense {
    public readonly id: string;
    public readonly name: string;
    public readonly category: string;
    public readonly amount: number;
    public readonly createdOn: number;
    public readonly subExpenses?: Expense[];

    constructor(
        id: string, name: string, category: string,
        amount: number, createdOn: number, subExpenses?: Expense[]) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.amount = amount;
        this.createdOn = createdOn;
        this.subExpenses = subExpenses;
    }

    public add(other: Expense): Expense {
        const id = uuid();

        return new Expense(
            id,
            id,
            this.category === other.category ? this.category : "Total",
            numbro(this.amount).add(other.amount).value(),
            Date.now(),
            [this, other],
        );
    }
}
