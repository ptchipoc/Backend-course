import express from "express"
import { register } from "../controllers/authControllers.js";

const router = new express.Router();

router.get('/', (req, res) =>
{
  res.json({message: "get"});
})

router.post('/', register)

export default router;  