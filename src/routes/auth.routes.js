import { Router } from 'express';
const router = Router();

import * as authCtrl from '../controllers/user.controller';

router.post('/login', authCtrl.signIn);
router.post('/register', authCtrl.createUser);

export default router;
