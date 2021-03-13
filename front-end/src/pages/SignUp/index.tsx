import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import SignUpController from '../../controllers/SignUp';
import { Wrapper, ErrorMessage } from './styles';

let name: string;
let birthDate: string;

const SignUp: React.FC = () => {
  const { signUp, borderWidth, birthDateEmpty, nameEmpty } = SignUpController();

  return (
    <Wrapper>
      <Input
        type="text"
        onChange={e => (name = e.target.value)}
        onKeyPress={event => {
          if (event.key === 'Enter') signUp({ name, birthDate });
        }}
        placeholder="Digite seu nome"
        style={{
          borderWidth: borderWidth(nameEmpty),
          borderColor: 'red',
        }}
      />
      <Input
        type="date"
        onChange={e => (birthDate = e.target.value)}
        style={{
          borderWidth: borderWidth(birthDateEmpty),
          borderColor: 'red',
        }}
      />
      <ErrorMessage
        style={{ display: `${birthDateEmpty || nameEmpty ? 'flex' : 'none'}` }}
        initial={{ y: -30 }}
        animate={{
          y: 0,
          transition: {
            duration: 1.5,
          },
        }}
      >
        Por favor, preencha este campo!
      </ErrorMessage>
      <Button label="Criar conta" onClick={() => signUp({ name, birthDate })} />
    </Wrapper>
  );
};

export default SignUp;
