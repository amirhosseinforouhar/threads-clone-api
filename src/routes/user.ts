import { Router } from "express";
const userRouter : Router = Router()

import * as controller from "../controllers/user"

userRouter.get("/profile" , controller.getProfile)
userRouter.get("/user" , controller.getOthersProfile)
userRouter.post("/follow/:id" , controller.followUnFollowUser)

export default userRouter ; 