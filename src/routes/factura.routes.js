import { Router } from 'express';
const router = Router();
import * as facturaCtrl from '../controllers/factura.controller';

router.post('/', facturaCtrl.createFactura);
router.get('/', facturaCtrl.getFacturas);
router.get('/:id', facturaCtrl.getFacturaById);
router.put('/:id', facturaCtrl.cancelarFactura);

export default router;
