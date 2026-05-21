import { Router } from "express"
import UserController from "../controllers/UserController"

export default function UserRoutes(controller: UserController) {
    const router = Router() 

    router.get("/user/:id", controller.getUser)
    router.post("/user", controller.addUser)
    router.put("/user/:id", controller.updateUser)
    router.delete("/user/:id", controller.deleteUser)

    return router
}
