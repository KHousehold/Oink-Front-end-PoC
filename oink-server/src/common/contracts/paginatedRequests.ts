export default class PaginatedRequest {
constructor(
        public readonly pageNumber: number,
        public readonly pageSize: number,
    ) { }
}