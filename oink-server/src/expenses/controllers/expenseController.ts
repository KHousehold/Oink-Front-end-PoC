import { interfaces, controller, httpGet, httpPost, request, response, queryParam } from "inversify-express-utils";
import { inject } from "inversify";
import express from "express";
import ExpenseService from "../services/expensesService";
import Expense from "../models/expense";
import BaseError from "../../common/errors/error";
import { GetExpensesRequest } from "../contracts/getExpensesRequest";

@controller("/expense")
export class ExpenseController implements interfaces.Controller {

    constructor(private readonly expenseService: ExpenseService) { }

    @httpGet("/")
    public async getExpenses(
        @queryParam("filter") request: GetExpensesRequest, 
        @response() response: express.Response) {
        const result = await this.expenseService.getExpenses();
        try {
            result.fold(
                (error) => response.status(400).send(error),
                (success) => response.status(200).send({ result: success}),
            );
        } catch (err) {
            response.status(400).send({ error: err.message });
        }
    }

    @httpPost("/")
    public async createExpense(@request() req: express.Request, @response() res: express.Response) {
        try {
            const result = await this.expenseService.addExpense(req.body);

            result.fold(
                (error) => res.status(400).send(error),
                (success) => res.status(201). send({result: success})
            );
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}
