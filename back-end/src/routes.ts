import express from 'express';
import { UserController } from './controllers/User';
import { Joi, celebrate, Segments } from 'celebrate';

const routes = express.Router();

routes.post(
  '/users',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      birthDate: Joi.date().required(),
      photo: Joi.string().required(),
    }),
  }),
  UserController.create,
);
routes.get(
  '/users',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string(),
      birthDate: Joi.date(),
      photo: Joi.string(),
    }),
  }),
  UserController.read,
);
routes.put(
  '/users/:code',
  celebrate({
    [Segments.PARAMS]: Joi.number().required(),
  }),
  UserController.update,
);
routes.delete(
  '/users/:code',
  celebrate({
    [Segments.PARAMS]: Joi.number().required(),
  }),
  UserController.delete,
);

export default routes;
