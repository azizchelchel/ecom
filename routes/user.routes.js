import express from 'express';
import { signin, signup } from "../controllers/user.controller.js";
const router = express.Router();
// signup user
router.post("/signup", signup );
//signin
router.post("/signin", signin );
//update user credentials
router.patch("/updateUser/:userId");
export default router;