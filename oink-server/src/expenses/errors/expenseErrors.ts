import BaseError from "../../common/errors/error";

export const ERROR_CONSTANTS = {
    GENERIC_DB_ERROR: "EXP_DB_001",
};

export class ExpenseBaseError extends BaseError {
    constructor(id: string, message: string) {
        super(id, message, "expenses");
    }
}
