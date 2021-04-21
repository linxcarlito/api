import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import paquetesRoutes from './routes/paquete.routes';
import remitenteRoutes from './routes/remitente.routes';
import facturaRoutes from './routes/factura.routes';
import destinatarioRoutes from './routes/destinatario.routes';
import authRoutes from './routes/auth.routes';
import { config } from 'dotenv';

config();
const app = express();

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3001',
    exposedHeaders: 'x-access-token',
  })
);

app.use(express.json());

app.use(morgan('dev'));

const distDir = __dirname + "/dist/";
 app.use(express.static(distDir));

app.use('/api/paquetes', paquetesRoutes);
app.use('/api/remitente', remitenteRoutes);
app.use('/api/factura', facturaRoutes);
app.use('/api/destinatario', destinatarioRoutes);
app.use('/api/auth', authRoutes);
export default app;
