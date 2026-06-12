import ILoginService from "../services/ILoginService"
import { Request, Response } from "express"

export default class LoginController {
    constructor(private readonly service: ILoginService){}

    login = async (req: Request, res: Response) => {
        const {email, password} = req.body

        const token = await this.service.login(email, password)

        res.json({token: token})
    }
}   