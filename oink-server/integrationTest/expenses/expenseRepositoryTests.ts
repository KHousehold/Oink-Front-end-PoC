import { describe, it } from "mocha";
import chai, { assert } from "chai";
import uuid from "uuid/v4";
import Expense from "../../src/expenses/models/expense";
import ExpenseRepository from "../../src/expenses/repositories/expenseRepository";
import ExpenseMapper from "../../src/expenses/repositories/expenseMapper";
import mongoose from "mongoose";
import { AssertionError } from "assert";
import { right } from "fp-ts/lib/Either";

chai.should();

describe("Expense repository integration tests", () => {
    const expenseMapper = new ExpenseMapper();
    const expenseRepository = new ExpenseRepository(mongoose, expenseMapper);

    describe("inserting into the repository", () => {
        it("should be successfull", async () => {
            mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });
            const expense = new Expense(uuid(), "Power June", "power", 25.00, Date.now(), []);

            const result = await expenseRepository.addNewExpense(expense);

            mongoose.disconnect();
        });
    });

    describe("getting via repository", () => {
        it("should be able to retrive all expenses without parameters", async () => {
            mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });
            const result = await expenseRepository.getExpenses();

            assert.isNotEmpty(result);
            mongoose.disconnect();
        });
    });

});
