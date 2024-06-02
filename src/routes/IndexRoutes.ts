import {Router, Request, Response} from 'express';
import { IndexControllers } from "../controllers/IndexControllers";

const router = Router();

router.get("/", IndexControllers.renderIndex);

export default router;
