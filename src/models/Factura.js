import { model, Schema } from 'mongoose';
const facturaSchema = new Schema({
  destinatarioNombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  total: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  cancelada: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export default model('Factura', facturaSchema);
