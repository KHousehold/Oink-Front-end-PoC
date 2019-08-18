import { injectable } from "inversify";
import { IExpense } from "./expenseSchema";
import Expense from "../models/expense";

@injectable()
export default class ExpenseModelMapper {
    public toModel(entity: IExpense): Expense {
        return new Expense(
            entity.id,
            entity.name,
            entity.category,
            entity.amount,
            entity.createdOn,
            this.toModels(entity.subExpenses),
        );
    }

    public toModels(entities: IExpense[]): Expense[] {
        if (Array.isArray(entities) && entities.length > 0)
            return entities.map(entity => this.toModel(entity))
        else
            return []
    }
}