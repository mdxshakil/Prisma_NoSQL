import express from 'express';
import { userControllers } from './user.controller';
const router = express.Router();

router.post('/create-user', userControllers.createUser);
router.get('/get-users', userControllers.getUsers);
router.get('/:id', userControllers.getSingleUser);
router.patch('/:id', userControllers.updateUser);
router.delete('/:id', userControllers.deleteUser);

export const userRoutes = router;
