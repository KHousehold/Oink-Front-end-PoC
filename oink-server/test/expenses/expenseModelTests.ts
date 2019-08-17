import { describe, it } from 'mocha';
import chai from 'chai';
import uuid from 'uuid/v4';
import Expense from "../../src/expenses/models/expense";

chai.should();

describe("Expense model tests", () => {
    describe("addition tests", () => {
        it('', () => {
            const expenseOne = new Expense(uuid(), "Power June", "power", 25.00, null);
            const expenseTwo = new Expense(uuid(), "Power July", "power", 23.00, null);

            const total = expenseOne.add(expenseTwo);

            total.amount.should.equal(48.00, "Total value incorect")
        });
    })
});