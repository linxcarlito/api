import { Router } from 'express';
const router = Router();
import * as destinatarioCtrl from '../controllers/destinatario.controller';

router.post('/', destinatarioCtrl.createDestinatario);
router.get('/', destinatarioCtrl.getDestinatarios);
router.get('/:id', destinatarioCtrl.getDestinatarioById);
router.put('/:id', destinatarioCtrl.updateDestinatarioById);
router.delete('/:id', destinatarioCtrl.deleteDestinatarioById);

export default router;
