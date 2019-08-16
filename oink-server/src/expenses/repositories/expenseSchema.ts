import mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface IExpense extends mongoose.Document {
    readonly id: string;
    readonly name: string;
    readonly category: string;
    readonly amount: number;
    readonly createdOn: number;
    readonly subExpenses?: [IExpense];
}

export let ExpenseSchema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    createdOn: { type: Number, required: true },
    subExpenses: { type: [Object], required: false },
});
