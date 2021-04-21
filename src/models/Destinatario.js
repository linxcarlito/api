import { model, Schema } from 'mongoose';

const destinatarioSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  RNC: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    requied: true,
  },
  email: {
    type: String,
    required: true,
  },
  pais: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
});

export default model('Destinatario', destinatarioSchema);
