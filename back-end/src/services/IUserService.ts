import { IUser } from "../models/UserModel"
import UserDto from "../dto/UserDto"

export default interface IUserService {
    addUser: (user: IUser) => Promise<UserDto>
    getUser: (id: number) => Promise<UserDto>
    updateUser: (id: number, user: IUser) => Promise<UserDto>
    deleteUser: (id: number) => Promise<void>
}