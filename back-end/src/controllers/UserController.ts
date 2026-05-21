import IUserService from "../services/IUserService";
import { IUser } from "../models/UserModel";
import { Request, Response } from "express"

export default class UserController {
    constructor(private service: IUserService){}

    getUser = async (req: Request, res: Response) => {
        const id = Number(req.params.id)
        const user = await this.service.getUser(id)

        res.json(user)
    } 

    addUser = async (req: Request, res: Response) => {
        const user: IUser = req.body

        res.json(await this.service.addUser(user))

    }

    updateUser = async (req: Request, res: Response) => {
        const id = Number(req.params.id)
        const updatedUser: IUser = req.body;

        res.json(await this.service.updateUser(id, updatedUser))
    }

    deleteUser = async (req: Request, res: Response) => {
        const id = Number(req.params.id)       
        await this.service.deleteUser(id)

        res.json({"Sucess": "User deleted"})
    }
}