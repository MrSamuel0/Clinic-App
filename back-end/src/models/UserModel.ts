import { Schema, model, Document } from "mongoose"

export interface IUser extends Document {
    id: number
    name: string
    email: string
    age: number
}

const userSchema = new Schema<IUser>({
    id: { type: Number, unique: true },
    name: {type: String, required: true},
    email: {type: String, required: true},
    age: {type: Number, required: true}
})

export const userModel = model<IUser>("User", userSchema)