import { useEffect, useState } from 'react';
import { UserProps } from '../models/User';
import api from '../services/api';

const UsersController = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [nameEmpty, setNameEmpty] = useState<boolean>(false);
  const [birthDateEmpty, setBirthDateEmpty] = useState<boolean>(false);
  const [createModal, setCreateModal] = useState<boolean>(false);
  const [updateModal, setUpdateModal] = useState<boolean>(false);

  useEffect(() => {
    getUsers();
  }, []);

  const openCreateModal = () => {
    setCreateModal(true);
  };

  const openUpdateModal = () => {
    setUpdateModal(true);
  };

  const closeCreateModal = () => {
    setCreateModal(false);
  };

  const closeUpdateModal = () => {
    setUpdateModal(false);
  };

  const getUsers = async () => {
    const { data } = await api.get('/users');

    setUsers(data);
  };

  const createUser = async ({ name, birthDate }: UserProps) => {
    if (!name) {
      setNameEmpty(true);
    } else if (!birthDate) {
      console.log(birthDate);
      setBirthDateEmpty(true);
    } else {
      await api.post('/users', {
        name,
        birthDate,
      });
      getUsers();
      closeCreateModal();
    }
  };

  const updateUser = async ({ code, name, birthDate }: UserProps) => {
    if (!name) {
      setNameEmpty(true);
    } else if (!birthDate) {
      setBirthDateEmpty(true);
    } else {
      await api.put(`/users/${code}`, {
        name,
        birthDate,
      });
      getUsers();
      closeUpdateModal();
    }
  };

  const deleteUser = async ({ code }: UserProps) => {
    await api.delete(`/users/${code}`);
    getUsers();
  };

  const setBorder = (choose: boolean) => {
    return choose ? 2 : 0;
  };

  return {
    users,
    nameEmpty,
    birthDateEmpty,
    createUser,
    createModal,
    openCreateModal,
    closeCreateModal,
    updateUser,
    updateModal,
    openUpdateModal,
    closeUpdateModal,
    deleteUser,
    setBorder,
  };
};

export default UsersController;
