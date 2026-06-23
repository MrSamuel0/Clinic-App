import UserCreateDto from "../dto/user/UserCreateDto"
import UserPatchDto from "../dto/user/UserPatchDto"
import { IUser } from "../models/UserModel"

export default interface IUserRepository{
    createUser: (user: UserCreateDto) => Promise<IUser>
    patchUser: (id: number, user: UserPatchDto) => Promise<IUser>
    getUser: (id: number) => Promise<IUser | null>
    getUserByEmail: (email: string) => Promise<IUser | null>
    deleteUser: (id: number) => Promise<void>
}
