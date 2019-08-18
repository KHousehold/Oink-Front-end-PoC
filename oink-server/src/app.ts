import express from "express";
import { Container } from "inversify";
import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import bodyParser = require("body-parser");
import mongoose, { Mongoose, mongo } from "mongoose";
import ExpenseRepository from "./expenses/repositories/expenseRepository";
import ExpenseMapper from "./expenses/repositories/expenseMapper";
import ExpenseService from "./expenses/services/expensesService";
import "./expenses/expenseController";
import { TYPES } from "./infrastructure/ioc/types";
import DbContext from "./infrastructure/dbContext";
import config from "./config/app-config.json";

async function runApp() {
    const inversifyContainer = new Container();
    const app = await bootstrap(inversifyContainer);
    return app;
}

(async () => {
    await runApp();
})();

async function bootstrap(
    container: Container,
) {
    const dbContext = new DbContext(config.mongo.connectionString);
    const connection = await dbContext.getConnection();
    container.bind<Mongoose>(Mongoose).toConstantValue(connection);
    container.bind<ExpenseMapper>(ExpenseMapper).to(ExpenseMapper);
    container.bind<ExpenseRepository>(ExpenseRepository).to(ExpenseRepository);
    container.bind<ExpenseService>(ExpenseService).to(ExpenseService);

    const server = new InversifyExpressServer(container);
    server.setConfig((a) => {
        // add body parser
        a.use(bodyParser.urlencoded({
            extended: true,
        }));
        a.use(bodyParser.json());
    });

    const app = server.build();

    app.listen(config.app.port, (err) => {
        if (err) {
            return console.error(err);
        }
        return console.log(`server is listening on ${config.app.port}`);
    });

    return app;
}
