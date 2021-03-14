import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import SignUpController from '../../controllers/SignUp';
import { Wrapper, ErrorMessage, Modal, Text } from './styles';

let name: string;
let birthDate: string;

const SignUp: React.FC = () => {
  const {
    id,
    signUp,
    borderWidth,
    birthDateEmpty,
    nameEmpty,
    idModal,
  } = SignUpController();

  return (
    <Wrapper>
      <Modal
        initial={{ y: -20 }}
        animate={{
          y: 0,
          transition: {
            duration: 1.5,
          },
        }}
        exit={{ y: -20 }}
        style={{ display: `${idModal ? 'flex' : 'none'}` }}
      >
        <Text>{`Seu id é ${id}. Copie-o para acessar a plataforma. Você será redirecionado para a página de login em breve!`}</Text>
      </Modal>
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
        onKeyPress={event => {
          if (event.key === 'Enter') signUp({ name, birthDate });
        }}
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
