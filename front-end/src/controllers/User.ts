import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginProps } from '../models/Login';
import { CreateUserProps, UserProps } from '../models/User';
import api from '../services/api';

const UsersController = () => {
  const history = useHistory();
  const [users, setUsers] = useState<UserProps[]>([]);

  const logIn: LoginProps = async ({ code }) => {
    const userFinded = await api.get(`/users/${code}`);
    if (userFinded) {
      localStorage.setItem('code', code);
      history.push('/');
    } else {
      //
    }
  };

  const getUsers = async () => {
    const { data } = await api.get('/users');

    setUsers(data);
  };

  const createUser: CreateUserProps = async ({ name, birthDate }) => {
    const { data } = await api.post('/users', {
      name,
      birthDate,
    });

    return data;
  };

  return {
    users,
    logIn,
    createUser,
    getUsers,
  };
};

export default UsersController;
