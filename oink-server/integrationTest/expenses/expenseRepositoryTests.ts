import { describe, it } from "mocha";
import chai from "chai";
import uuid from "uuid/v4";
import Expense from "../../src/expenses/models/expense";
import ExpenseRepository from "../../src/expenses/repositories/expenseRepository";
import mongoose from "mongoose";

chai.should();

describe("Expense repository integration tests", () => {
    describe("inserting into the repository", () => {
        it("should be successfull", async () => {
            mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });
            const expenseRepository = new ExpenseRepository(mongoose);
            const expense = new Expense(uuid(), "Power June", "power", 25.00, Date.now(), []);

            const result = await expenseRepository.addNewExpense(expense);

            result.should.equal(true);
        });
    });
});
