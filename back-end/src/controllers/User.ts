import client from '../database/connection';
import { Request, Response } from 'express';
import { UserModel, UserProps } from '../models/User';

export const UserController = {
  async create(request: Request, response: Response) {
    await client.sync();

    const { name, birthDate } = request.body as UserProps;

    const data = await UserModel.create({
      name: name,
      birthDate: birthDate,
    });

    return response.json(data);
  },

  async read(_request: Request, response: Response) {
    await client.sync();

    const users = await UserModel.findAll();

    return response.json(users);
  },

  async update(request: Request, response: Response) {
    await client.sync();

    const { code } = (request.params as unknown) as { code: number };
    const data = request.body;

    const user = await UserModel.findByPk(code);

    if (user) {
      Object.keys(data).map((field: string) => user.set(field, data[field]));
      user.save();
    }

    return response.json(user);
  },

  async delete(request: Request, response: Response) {
    await client.sync();

    const { code } = (request.params as unknown) as { code: number };

    const user = await UserModel.findByPk(code);

    if (user) {
      user.destroy();
    }

    return response.json(user);
  },
};
