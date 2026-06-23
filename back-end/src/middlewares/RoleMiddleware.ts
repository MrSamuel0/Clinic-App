import { Request, Response, NextFunction } from "express"
import { Role } from "../generated/prisma/client"
import { ForbiddenException } from "../exceptions"

export const requireRole = (allowedRole: Role) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (req.role !== allowedRole) {
            throw new ForbiddenException("User not authorized to perform this action")
        }
        next()
    }
}