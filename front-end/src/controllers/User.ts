import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginProps } from '../models/Login';
import { CreateUserProps, UserProps } from '../models/User';
import api from '../services/api';
import { v4 as uuid } from 'uuid';

const UsersController = () => {
  const history = useHistory();
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    getUsers();
    console.log();
  }, []);

  const logIn: LoginProps = ({ email, password }) => {
    const userFinded = users.find(
      user => user.email === email && user.password === password,
    );
    if (userFinded) {
      localStorage.setItem('token', uuid());
      history.push('/');
    }
  };

  const getUsers = async () => {
    const { data } = await api.get('/usuarios');

    setUsers(data);
  };

  const createUser: CreateUserProps = async ({
    cpf,
    email,
    endereco,
    name,
    password,
  }) => {
    const { data } = await api.post('/usuarios', {
      cpf,
      email,
      endereco,
      name,
      password,
    });

    return data;
  };

  return {
    users,
    logIn,
    createUser,
  };
};

export default UsersController;
