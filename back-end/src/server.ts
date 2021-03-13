import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import routes from './routes';

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);
server.use(errors());

server.listen(3333);
