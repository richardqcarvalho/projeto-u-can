import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginProps } from '../models/Login';
import { CreateUserProps, UserProps } from '../models/User';
import api from '../services/api';

const UsersController = () => {
  const history = useHistory();
  const [users, setUsers] = useState<UserProps[]>([]);
  const [emptyError, setEmptyError] = useState<boolean>(false);
  const [userError, setUserError] = useState<boolean>(false);

  const logIn: LoginProps = async ({ code }) => {
    setEmptyError(false);
    if (!code) {
      setEmptyError(true);
    } else {
      const { data } = await api.get(`/users/${code}`);
      if (data) {
        localStorage.setItem('code', code);
        history.push('/');
      } else {
        openUserErrorModal();
      }
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

  const openUserErrorModal = () => {
    setUserError(true);
  };

  const closeUserErrorModal = () => {
    setUserError(false);
  };

  return {
    emptyError,
    userError,
    users,
    logIn,
    createUser,
    getUsers,
    openUserErrorModal,
    closeUserErrorModal,
  };
};

export default UsersController;
