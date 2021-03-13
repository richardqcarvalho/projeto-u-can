import React from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/Button';
import Input from '../../components/Input';
import UsersController from '../../controllers/User';
import {
  Container,
  Wrapper,
  Divider,
  ErrorMessage,
  Modal,
  Text,
  CloseButton,
} from './styles';

let code: string;

const Login: React.FC = () => {
  const history = useHistory();
  const { logIn, emptyError, userError } = UsersController();

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      }}
    >
      <Modal
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: {
            duration: 1.5,
          },
        }}
        style={{ display: `${userError ? 'flex' : 'none'}` }}
      >
        <CloseButton
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={{}}
        />
        <Text>Usuário não encontrado. Tente novamente!</Text>
      </Modal>
      <Wrapper>
        <Input
          type="text"
          onChange={e => (code = e.target.value)}
          onKeyPress={event => {
            if (event.key === 'Enter') logIn({ code });
          }}
        />
        <ErrorMessage
          style={{ display: `${emptyError ? 'flex' : 'none'}` }}
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
        <Button label="Entrar" onClick={() => logIn({ code })} />
      </Wrapper>
      <Divider />
      <Wrapper>
        <Button label="Criar conta" onClick={() => history.push('/sign-up')} />
      </Wrapper>
    </Container>
  );
};

export default Login;
