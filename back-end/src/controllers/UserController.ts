import IUserService from "../services/IUserService"
import { Request, Response } from "express"
import UserCreateDto from "../dto/user/UserCreateDto";
import UserPatchDto from "../dto/user/UserPatchDto";

export default class UserController {
    constructor(private service: IUserService){}

    getUser = async (req: Request, res: Response) => {
        const id = Number(req.params.id)

        const user = await this.service.getUser(id)
        
        res.status(200).json(user)
    }

    addUser = async (req: Request, res: Response) => {
        const user = new UserCreateDto(req.body)

        res.status(201).json(await this.service.addUser(user))
    }

    patchUser = async (req: Request, res: Response) => {
        const id = Number(req.params.id)
        const updatedUser = new UserPatchDto(req.body)

        res.status(200).json(await this.service.patchUser(id, updatedUser))
    }

    deleteUser = async (req: Request, res: Response) => {
        const id = Number(req.params.id)       
        await this.service.deleteUser(id)

        res.status(204).send()
    }
}