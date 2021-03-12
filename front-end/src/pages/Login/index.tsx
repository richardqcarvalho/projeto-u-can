import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
// import UsersController from '../../controllers/Users';

import { Container, Wrapper, Divider } from './styles';

let email: string;
let password: string;

const Login: React.FC = () => {
  // const { logIn } = UsersController();

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
      <Wrapper>
        <Input type="email" onChange={e => (email = e.target.value)} />
        <Input type="password" onChange={e => (password = e.target.value)} />
        {/* <Button label="Entrar" onClick={() => logIn({ email, password })} /> */}
        <Button label="Entrar" onClick={() => console.log(email, password)} />
      </Wrapper>
      <Divider />
      <Wrapper>
        <Button
          label="Criar conta"
          onClick={() => console.log('Criar conta')}
        />
      </Wrapper>
    </Container>
  );
};

export default Login;
