import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginProps } from '../models/Login';
import api from '../services/api';

const LoginController = () => {
  const history = useHistory();
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
        setTimeout(closeUserErrorModal, 3500);
      }
    }
  };

  const openUserErrorModal = () => {
    setUserError(true);
  };

  const closeUserErrorModal = () => {
    setUserError(false);
  };

  const borderWidth = () => {
    return emptyError ? 2 : 0;
  };

  return {
    emptyError,
    userError,
    logIn,
    openUserErrorModal,
    closeUserErrorModal,
    borderWidth,
  };
};

export default LoginController;
