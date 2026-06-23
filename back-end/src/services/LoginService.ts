import ILoginService from "./ILoginService"
import IUserRepository from "../repository/IUserRepository"
import { UnauthorizedException } from "../exceptions"
import { envConfig } from "../config/index"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export default class LoginService implements ILoginService {
    constructor(private readonly repo: IUserRepository){}

    async login(email: string, password: string): Promise<string> {
        const user = await this.repo.getUserByEmail(email)
        if (!user) {
            throw new UnauthorizedException("Invalid credentials")
        }
        
        const isPassword = await bcrypt.compare(password, user.password)
        if (!isPassword) { 
            throw new UnauthorizedException("Invalid credentials")
        }
        
        return jwt.sign({role: user.role}, envConfig.ACCESS_SECRET, {
            subject: user!.id.toString(),
            expiresIn: "1d"
        })
    }
}
