import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import upload from '../middlewares/upload.middleware';
const router = Router();

router.post('/register', UserController.createUser);
router.get('/listuser', UserController.listUsers);
router.get('/createuser', UserController.createUser);
router.post('/updateUser/:id', upload.single('profilePicture'), UserController.updateUser);
router.get('/me', UserController.me);

export default router;
