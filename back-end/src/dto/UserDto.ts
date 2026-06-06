import { IUser } from "../models/UserModel"

export default class UserDto {
    id: number
    name: string
    email: string
    age: number
    password: string

    constructor(user: IUser) {
        this.id = user.id
        this.name = user.name
        this.email = user.email
        this.age = user.age
	    this.password = user.password
    }
}

