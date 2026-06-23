import UserDto from "../dto/user/UserDto"
import UserPatchDto from "../dto/user/UserPatchDto"
import UserCreateDto from "../dto/user/UserCreateDto"
import IUserService from "./IUserService"
import IUserRepository from "../repository/IUserRepository"
import { BadRequestException, ConflictException, NotFoundException } from "../exceptions"
import bcrypt from "bcrypt"

export default class UserService implements IUserService {
  constructor(private readonly repo: IUserRepository){}

  async addUser(user: UserCreateDto): Promise<UserDto> {
    const exists = await this.repo.getUserByEmail(user.email)

    if(exists) {
      throw new ConflictException("User already exists")
    }

    const hashPwd = await bcrypt.hash(user.password, 10)
    user.password = hashPwd

    const newUser = await this.repo.createUser(user)

    return new UserDto(newUser)
  }

  async getUser(id: number): Promise<UserDto> {
    const user = await this.repo.getUser(id)

    if(!user) {
      throw new NotFoundException("User not found")
    }

    return new UserDto(user)
  }
  
  async patchUser(id: number, user: UserPatchDto): Promise<UserDto> {
    const oldUser= await this.repo.getUser(id)

    if(!oldUser) {
      throw new NotFoundException("User not found")
    }

    if (user.password === "") {
      throw new BadRequestException("Password field cannot be empty")

    } else if (user.password !== undefined) {
      user.password = await bcrypt.hash(user.password, 10)
      
    } else {
      user.password = oldUser.password
    }

    const newUser = await this.repo.patchUser(oldUser.id, user)

    return new UserDto(newUser)
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.repo.getUser(id)

    if (!user) {
      throw new NotFoundException("User not found")
    }

    await this.repo.deleteUser(user.id)
  }
}