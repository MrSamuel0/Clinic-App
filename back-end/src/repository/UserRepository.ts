import { Model } from "mongoose";
import IUserRepository from "./UserRepository"
import { IUser } from "../models/UserModel";

export default class UserRepository implements IUserRepository {
    constructor(private readonly db: Model<IUser>) {}

    async createUser(user: IUser): Promise<IUser> {
        return await this.db.create(user)
    }

    async getUser(id: number):  Promise<IUser | null> {
        return await this.db.findOne({ id: id })
    }

    async updateUser(id: number, user: IUser): Promise<IUser | null> {
        return this.db.findOneAndUpdate({ id }, user, { returnDocument: "after" });
    }

    async deleteUser(id: number): Promise<void> {
        await this.db.findOneAndDelete({ id })
    }
}