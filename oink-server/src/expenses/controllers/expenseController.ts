import { interfaces, controller, httpGet, httpPost, request, response } from "inversify-express-utils";
import { inject } from "inversify";
import express from "express";
import ExpenseService from "../services/expensesService";
import Expense from "../models/expense";
import BaseError from "../../infrastructure/errors/error";

@controller("/expense")
export class ExpenseController implements interfaces.Controller {

    constructor(private readonly expenseService: ExpenseService) { }

    @httpGet("/")
    public async getExpenses(request: express.Request, response: express.Response) {
        const result = await this.expenseService.getExpenses();

        result
        return { result };
    }

    @httpPost("/")
    public async createExpense(@request() req: express.Request, @response() res: express.Response) {
        try {
            const result = await this.expenseService.addExpense(req.body);
            res.status(201).send({ result });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}
