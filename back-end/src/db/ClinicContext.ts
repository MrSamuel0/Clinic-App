import mongoose from "mongoose";

export default class ClinicContext {
    async connect(connString: string) {
        await mongoose.connect(connString)
    }
}