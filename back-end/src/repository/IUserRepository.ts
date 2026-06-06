import { IUser } from "../models/UserModel"

export default interface IUserRepository{
    createUser: (user: IUser) => Promise<IUser>
    updateUser: (id: number, user: IUser) => Promise<IUser>
    getUser: (id: number) => Promise<IUser | null>
    getUserByEmail: (email: string) => Promise<IUser | null>
    deleteUser: (id: number) => Promise<void>
}
