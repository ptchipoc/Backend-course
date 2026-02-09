import express from "express"
import { register, login } from "../controllers/authControllers.js";

const router = new express.Router();

router.post('/register', register);
router.post('/login', login);

export default router