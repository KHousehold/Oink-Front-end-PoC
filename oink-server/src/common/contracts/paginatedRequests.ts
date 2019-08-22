export default class PaginatedRequest {
    constructor(
        public readonly pageNumber: number,
        public readonly pageSize: number,
    ) { }

    public getItemsToSkip(): number {
        return this.pageNumber * this.pageSize;
    }
}
