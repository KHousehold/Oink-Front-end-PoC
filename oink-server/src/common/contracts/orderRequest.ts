export class PropertyOrderRequest {
    constructor(
        public readonly name: string,
        public readonly orderType: string, // "ASC" | "DESC"
    ) { }
}
