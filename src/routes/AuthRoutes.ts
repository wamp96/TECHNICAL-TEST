
import {Router} from 'express';
import { AuthController } from '../controllers/AuthControllers';
import passport from 'passport';

const router = Router();

//Rutas
router.get('/auth/signup', AuthController.rendersignupForm);
router.post('/auth/signup', AuthController.signup);

router.get('/auth/signin', AuthController.rendersigninForm);
router.post('/auth/signin', AuthController.signin);

router.get('/auth/logout', AuthController.logout);

export default router;
