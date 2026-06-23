import { Request, Response, NextFunction } from "express"
import {
  ConflictException,
  BadRequestException,
  NotFoundException,
  UnauthorizedException,
  ForbiddenException
} from "../exceptions"

export const ErrorMiddleware = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof ConflictException) {
        return res.status(409).json({ message: err.message })

    } else if (err instanceof BadRequestException) {
        return res.status(400).json({ message: err.message })

    } else if (err instanceof NotFoundException) {
        return res.status(404).json({ message: err.message })

    } else if (err instanceof UnauthorizedException) {
        return res.status(401).json({ message: err.message })

    } else if (err instanceof ForbiddenException) {
        return res.status(403).json({ message: err.message })
    }

    console.log(err)
    return res.status(500).json({ message: "Internal server error" })
}