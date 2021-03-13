import { useState } from 'react';
import { UserProps } from '../models/User';
import api from '../services/api';

const UsersController = () => {
  const [users, setUsers] = useState<UserProps[]>([]);

  const getUsers = async () => {
    const { data } = await api.get('/users');

    setUsers(data);
  };

  return {
    users,
    getUsers,
  };
};

export default UsersController;
