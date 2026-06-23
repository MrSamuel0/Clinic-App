import { Role } from "../../generated/prisma/client";

export default class UserCreateDto {
    name: string
    age: number
    email: string
    password: string
    role: Role

    constructor(body: any) {
        this.name = body.name        
        this.age = body.age
        this.email = body.email
        this.password = body.password
        this.role = body.role
    }
}