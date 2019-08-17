import express from "express";
import mongoose, { Mongoose } from "mongoose";
import ExpenseRepository from "./expenses/repositories/expenseRepository";
import ExpenseMapper from "./expenses/repositories/expenseMapper";
import ExpenseService from "./expenses/expensesService";

const app = express();
const port = 3000;
const connectionString = "mongodb://localhost:27017/test";
mongoose.connect(connectionString);
const expenseService = initExpense(mongoose);

app.get("/", (req, res) => {
    res.send("PingPong");
});

app.get("/expense", async (req, res) => {
    const result = await expenseService.getExpenses();
    res.send({ result });
});

app.post("/expense", async (req, res) => {
    const result = await expenseService.addExpense(req.body);
    res.send(result);
});

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});

function initExpense(mongo: Mongoose) {
    return new ExpenseService(new ExpenseRepository(mongo, new ExpenseMapper()));
}
