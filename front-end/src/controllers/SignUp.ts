import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SignUpProps } from '../models/SignUp';
import api from '../services/api';

const SignUpController = () => {
  const history = useHistory();
  const [nameEmpty, setNameEmpty] = useState<boolean>(false);
  const [birthDateEmpty, setBirthDateEmpty] = useState<boolean>(false);

  const signUp: SignUpProps = async ({ name, birthDate }) => {
    setBirthDateEmpty(false);
    setNameEmpty(false);
    if (!name) {
      setNameEmpty(true);
    } else if (!birthDate) {
      setBirthDateEmpty(true);
    } else {
      api.post('/users', {
        name,
        birthDate,
      });
      history.push('/login');
    }
  };

  const borderWidth = (choose: boolean) => {
    return choose ? 2 : 0;
  };

  return {
    nameEmpty,
    birthDateEmpty,
    borderWidth,
    signUp,
  };
};

export default SignUpController;
