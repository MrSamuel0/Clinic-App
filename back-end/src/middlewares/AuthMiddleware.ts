import { Request, Response } from "express"
import { NextFunction } from "express"
import jwt, { JwtPayload } from "jsonwebtoken"
import { UnauthorizedException, ForbiddenException } from "../exceptions";
import { envConfig } from "../config";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization

  if (!authHeader?.startsWith("Bearer ")) {
    throw new UnauthorizedException("Invalid auth token")
  }

  const token = authHeader.slice(7)

  try {
    const payload = jwt.verify(token, envConfig.ACCESS_SECRET) as JwtPayload

    if (!payload.sub) {
      throw new UnauthorizedException("Invalid auth token")
    }
    
    req.uid = payload.sub
    req.role = payload.role
    next()

  } catch {
    throw new UnauthorizedException("Invalid auth token")
  }
}

export const verifyReqId  = (req: Request, res: Response, next: NextFunction) => {
    const targetId = req.params.id
    if (req.uid !== targetId) {
        throw new ForbiddenException("You can only modify your own data")
    }
    next()
}