import { Role } from "../../generated/prisma/client"
import { IUser } from "../../models/UserModel"

export default class UserDto {
    id: number
    name: string
    email: string
    age: number
    role: Role

    constructor(user: IUser) {
        this.id = user.id
        this.name = user.name
        this.email = user.email
        this.age = user.age
        this.role = user.role
    }
}

