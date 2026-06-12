import ILoginService from "./ILoginService"
import IUserRepository from "../repository/UserRepository"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import "dotenv/config"

export default class LoginService implements ILoginService {
    constructor(private readonly repo: IUserRepository){}

    async login(email: string, password: string): Promise<string> {
        const user = await this.repo.getUserByEmail(email)

        if(!user) {
            throw new Error("Invalid credentials")
        }

        const isPassword: boolean = await bcrypt.compare(password, user.password)

        if(!isPassword) {
            throw new Error("Invalid credentials")
        }

        const token = jwt.sign({id: user.id, name: user.name, age: user.age, email: email}, process.env.JWT_SECRET!, {
            expiresIn: "1d"
        })

        return token
    }
}
