import { Schema, model, Document } from "mongoose"

export interface IUser extends Document {
    name: string
    email: string
    age: number
    password: string
}

const userSchema = new Schema<IUser>({
    name: {type: String, required: true},
    email: {type: String, required: true},
    age: {type: Number, required: true},
    password: {type: String, required: true}
})

export const userModel = model<IUser>("User", userSchema)
