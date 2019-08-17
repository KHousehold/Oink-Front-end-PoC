import express from "express";
import mongoose, { Mongoose } from "mongoose";
import ExpenseRepository from "./expenses/repositories/expenseRepository";
import ExpenseMapper from "./expenses/repositories/expenseMapper";
import ExpenseService from "./expenses/expensesService";
import config from "./config/app-config.json";

const app = express();
const port = 3000;
mongoose.connect(config.mongo.connectionString, { useNewUrlParser: true });
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
