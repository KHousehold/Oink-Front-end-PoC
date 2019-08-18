import mongoose, { Mongoose } from "mongoose";

export default class DbContext {

    constructor(private connectionString: string) { }

    public async getConnection() {
        return new Promise<Mongoose>((resolve, reject) => {
            mongoose.connect(this.connectionString, { useNewUrlParser: true });
            const db = mongoose.connection;
            db.on("error", (e: Error) => {
                console.error("Db conenction error:", e);
                reject(e);
            });
            db.once("open", () => {
                console.log("Db conenction success:", this.connectionString);
                resolve(mongoose);
            });
        });
    }
}
