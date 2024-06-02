import {Router} from 'express';
import { AuthController } from '../controllers/AuthControllers';


const router = Router();

//Rutas
router.get('/auth/signup', AuthController.rendersignupForm);
router.post('/auth/signup', AuthController.signup);

router.get('/auth/signin', AuthController.rendersigninForm);
router.post('/auth/signin', AuthController.signin);

router.get('/auth/logout', AuthController.logout);

export default router;
