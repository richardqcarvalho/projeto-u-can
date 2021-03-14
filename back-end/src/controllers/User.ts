import client from '../database/connection';
import { Request, Response } from 'express';
import { UserModel, UserProps } from '../models/User';

export const UserController = {
  async create(request: Request, response: Response) {
    await client.sync();

    const { name, birthDate } = request.body as UserProps;

    try {
      const data = await UserModel.create({
        name: name,
        birthDate: birthDate,
      });

      return response.json(data);
    } catch (error) {
      return response.json(error);
    }
  },

  async read(request: Request, response: Response) {
    await client.sync();

    const { code } = request.params;

    if (code) {
      const user = await UserModel.findByPk(code);
      return response.json(user);
    } else {
      const users = await UserModel.findAll();
      return response.json(users);
    }
  },

  async update(request: Request, response: Response) {
    await client.sync();

    const { code } = request.params;
    const data = request.body;

    const user = await UserModel.findByPk(code);

    if (user) {
      Object.keys(data).map((field: string) => user.set(field, data[field]));

      try {
        user.save();
      } catch (error) {
        return response.json(error);
      }
    }
    return response.json(user);
  },

  async delete(request: Request, response: Response) {
    await client.sync();

    const { code } = request.params;

    const user = await UserModel.findByPk(code);

    if (user) {
      try {
        user.destroy();
      } catch (error) {
        return response.json(error);
      }
    }

    return response.json(user);
  },
};
