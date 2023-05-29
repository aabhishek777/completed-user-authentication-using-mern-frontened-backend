
import express from 'express';
import { createUser, loadUser, login } from '../controller/signup.js'
import { isAuthenticated } from '../middlewares/isAuthenticated.js';

const router = express.Router();


router.post('/post', createUser);

router.post('/login', login);
router.post("/load", isAuthenticated, loadUser);

export default router
/////////


