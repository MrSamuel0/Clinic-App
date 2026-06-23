import { Router } from "express"
import LoginController from "../controllers/LoginController"

export default function LoginRoutes(controller: LoginController) {
    const router = Router()

    router.post("/login", controller.login)

    return router
}