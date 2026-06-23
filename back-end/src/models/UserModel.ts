import { Role } from "../generated/prisma/client"

export interface IUser {
  id: number
  name: string
  email: string
  age: number
  password: string
  role: Role
}