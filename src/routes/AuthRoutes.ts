import {Router} from 'express';
import { AuthController } from '../controllers/AuthControllers';


const router = Router();

//Rutas
router.get('/auth/singup', AuthController.renderSingupForm);
router.post('/auth/singup', AuthController.singup);

router.get('/auth/singin', AuthController.renderSinginForm);
router.post('/auth/singin', AuthController.singin);

router.get('/auth/logout', AuthController.logout);

export default router;
