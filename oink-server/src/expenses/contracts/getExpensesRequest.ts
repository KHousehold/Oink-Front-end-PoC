import PaginatedRequest from "../../common/contracts/paginatedRequests";
import { PropertyOrderRequest } from "../../common/contracts/orderRequest";

export class GetExpensesRequest {
    constructor(
        public readonly paging: PaginatedRequest,
        public readonly columnOrdering?: PropertyOrderRequest[],
    ) { }
}
