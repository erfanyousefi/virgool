import { UserEntity } from "src/modules/user/entities/user.entity";

export {}
declare global {
    namespace Express {
        export interface Request {
            user?: UserEntity
        }
    }
}
declare module "express-serve-static-core" {
    export interface Request {
        user?: UserEntity
    }
}