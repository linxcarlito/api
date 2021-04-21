import { Schema, model } from 'mongoose';

const paqueteSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  peso: {
    type: String,
    required: true,
  },
  cantidad: {
    type: Number,
    required: true,
  },
  costoEnvio: {
    type: String,
    required: true,
  },
  remitente: {
    type: String,
    required: true,
  },
  destinatario: {
    type: String,
    required: true,
  },
  fechaLlegada: {
    type: Date,
    required: true,
  },
  fechaEntrega: {
    type: Date,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
    default: 'Almacen de Origen',
  },
});

export default model('Paquetes', paqueteSchema);
