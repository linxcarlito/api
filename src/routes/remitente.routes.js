import { Router } from 'express';
const router = Router();
import * as remitenteCtrl from '../controllers/remitente.controller';

router.post('/', remitenteCtrl.createRemitente);
router.get('/', remitenteCtrl.getRemitentes);
router.get('/:id', remitenteCtrl.getRemitenteById);
router.put('/:id', remitenteCtrl.updateRemitenteById);
router.delete('/:id', remitenteCtrl.deleteRemitenteById);

export default router;
