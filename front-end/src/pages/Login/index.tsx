import React from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/Button';
import Input from '../../components/Input';
import LoginController from '../../controllers/Login';
import {
  Container,
  Wrapper,
  Divider,
  ErrorMessage,
  Modal,
  Text,
} from './styles';

let code: string;

const Login: React.FC = () => {
  const history = useHistory();
  const { logIn, emptyError, userError, borderWidth } = LoginController();

  return (
    <>
      <Modal
        initial={{ y: -20 }}
        animate={{
          y: 0,
          transition: {
            duration: 1.5,
          },
        }}
        exit={{ y: -20 }}
        style={{ display: `${userError ? 'flex' : 'none'}` }}
      >
        <Text>Usuário não encontrado. Tente novamente!</Text>
      </Modal>
      <Container
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        }}
      >
        <Wrapper>
          <Input
            type="text"
            onChange={e => (code = e.target.value)}
            onKeyPress={event => {
              if (event.key === 'Enter') logIn({ code });
            }}
            placeholder="Digite seu id"
            style={{
              borderWidth: borderWidth(),
              borderColor: 'red',
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
          <Button
            label="Criar conta"
            onClick={() => history.push('/sign-up')}
          />
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
