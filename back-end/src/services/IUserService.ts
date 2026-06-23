import UserDto from "../dto/user/UserDto"
import UserCreateDto from "../dto/user/UserCreateDto";
import UserPatchDto from "../dto/user/UserPatchDto";

export default interface IUserService {
    addUser: (user: UserCreateDto) => Promise<UserDto>
    getUser: (id: number) => Promise<UserDto>
    patchUser: (id: number, user: UserPatchDto) => Promise<UserDto>
    deleteUser: (id: number) => Promise<void>
}