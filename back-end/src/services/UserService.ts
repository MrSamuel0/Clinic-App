import UserDto from "../dto/UserDto";
import { IUser } from "../models/UserModel"
import IUserService from "./IUserService"
import IUserRepository from "../repository/IUserRepository"
import bcrypt from "bcrypt"

export default class UserService implements IUserService {
  constructor(private readonly repo: IUserRepository){}

  async addUser(user: IUser): Promise<UserDto> {
    const exists = await this.repo.getUserByEmail(user.email)

    if(exists) {
      throw new Error("User already exists")
    }

    const hashPwd = await bcrypt.hash(user.password, 10)
    user.password = hashPwd

    const newUser = await this.repo.createUser(user)

    return new UserDto(newUser)
  }

  async getUser(id: number): Promise<UserDto> {
    const user = await this.repo.getUser(id)

    if(!user) {
      throw new Error("User not found")
    }

    return new UserDto(user)
  }
  
  async updateUser(id: number, user: IUser): Promise<UserDto> {
    const oldUser= await this.repo.getUser(id)

    if(!oldUser) {
      throw new Error("User not found")
    }

    const newUser = await this.repo.updateUser(oldUser.id, user)

    return new UserDto(newUser)
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.repo.getUser(id)

    if (!user) {
      throw new Error("User not found")
    }

    await this.repo.deleteUser(user.id)
  }
}