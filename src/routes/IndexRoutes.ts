import {Router, Request, Response} from 'express';
import { IndexControllers } from "../controllers/IndexControllers.js";

const router = Router();


router.get("/",(req:Request, res:Response)=>{
    res.render("index");
})
//router.get("/", IndexControllers.renderIndex);

export default router;
