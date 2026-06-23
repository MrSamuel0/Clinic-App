import "express-serve-static-core"
import { Role } from "../../generated/prisma/client"

declare module "express-serve-static-core" {
  interface Request {
    uid?: string
    role?: Role
  }
}