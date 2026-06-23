import { Router } from "express"
import UserController from "../controllers/UserController"
import { authMiddleware, verifyReqId } from "../middlewares/AuthMiddleware"
import { requireRole } from "../middlewares/RoleMiddleware"

export default function UserRoutes(controller: UserController) {
    const router = Router() 

    router.get("/user/:id", authMiddleware, verifyReqId, controller.getUser)
    router.post("/user", requireRole("ADMIN"), controller.addUser)
    router.patch("/user/:id", authMiddleware, controller.patchUser)
    router.delete("/user/:id", authMiddleware,  requireRole("ADMIN"),controller.deleteUser)

    return router
}
