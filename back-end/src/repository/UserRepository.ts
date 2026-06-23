import IUserRepository from "./IUserRepository"
import { IUser } from "../models/UserModel"
import { PrismaClient } from "../generated/prisma/client"
import UserPatchDto from "../dto/user/UserPatchDto"
import UserCreateDto from "../dto/user/UserCreateDto"

export default class UserRepository implements IUserRepository {
    constructor(private readonly db: PrismaClient) {}

    async createUser(user: UserCreateDto): Promise<IUser> {
        return await this.db.user.create({ data: user })
    }

    async getUser(id: number): Promise<IUser | null> {
        return await this.db.user.findUnique({ where: { id } })
    }

    async getUserByEmail(email: string): Promise<IUser | null> {
        return await this.db.user.findUnique({ where: { email } })
    }

    async patchUser(id: number, user: UserPatchDto): Promise<IUser> {
        return await this.db.user.update({ where: { id }, data: user })
    }

    async deleteUser(id: number): Promise<void> {
        await this.db.user.delete({ where: { id } })
    }
}