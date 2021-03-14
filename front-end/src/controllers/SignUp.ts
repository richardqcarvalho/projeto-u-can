import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SignUpProps } from '../models/SignUp';
import api from '../services/api';

const SignUpController = () => {
  const history = useHistory();
  const [nameEmpty, setNameEmpty] = useState<boolean>(false);
  const [birthDateEmpty, setBirthDateEmpty] = useState<boolean>(false);
  const [idModal, setIdModal] = useState<boolean>(false);
  const [id, setId] = useState<string>('');

  const signUp: SignUpProps = async ({ name, birthDate }) => {
    setBirthDateEmpty(false);
    setNameEmpty(false);
    if (!name) {
      setNameEmpty(true);
    } else if (!birthDate) {
      setBirthDateEmpty(true);
    } else {
      const { data } = await api.post('/users', {
        name,
        birthDate,
      });
      setId(data.code);
      openIdModal();
      setTimeout(closeIdModal, 10000);
      setTimeout(() => history.push('/login'), 10000);
    }
  };

  const openIdModal = () => {
    setIdModal(true);
  };

  const closeIdModal = () => {
    setIdModal(false);
  };

  const borderWidth = (choose: boolean) => {
    return choose ? 2 : 0;
  };

  return {
    id,
    idModal,
    nameEmpty,
    birthDateEmpty,
    borderWidth,
    signUp,
  };
};

export default SignUpController;
