import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './auth.routes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});