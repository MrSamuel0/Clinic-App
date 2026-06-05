import UserService from "./services/UserService"
import UserController from "./controllers/UserController"
import express from "express"
import cors from "cors"
import UserRoutes from "./routes/UserRoutes"
import ClinicContext from "./db/ClinicContext"
import UserRepository from "./repository/UserRepository"
import { userModel } from "./models/UserModel"
import "dotenv/config"

const port = process.env.PORT
const db = new ClinicContext
db.connect(process.env.MONGO_URI as string)
const repo = new UserRepository(userModel)
const service = new UserService(repo)
const controller = new UserController(service)
const app = express()
app.use(cors())
app.use(express.json())
app.use(UserRoutes(controller))


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
