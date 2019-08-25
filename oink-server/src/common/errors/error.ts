export default class BaseError {
    constructor(
        public readonly id: string,
        public readonly message: string,
        public readonly source: string,
    ) { }
}
