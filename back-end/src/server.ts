import { prisma } from "./lib/prisma"
import UserRepository from "./repository/UserRepository"
import UserService from "./services/UserService"
import LoginService from "./services/LoginService"
import UserController from "./controllers/UserController"
import LoginController from "./controllers/LoginController"
import UserRoutes from "./routes/UserRoutes"
import express from "express"
import cors from "cors"
import "dotenv/config"
import LoginRoutes from "./routes/LoginRoutes";

const port = process.env.PORT
const userRepo = new UserRepository(prisma)

const userService = new UserService(userRepo)
const loginService = new LoginService(userRepo)

const userController = new UserController(userService)
const loginController = new LoginController(loginService)

const app = express()
app.use(cors())
app.use(express.json())
app.use(UserRoutes(userController))
app.use(LoginRoutes(loginController))

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
