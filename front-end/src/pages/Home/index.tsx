import React from 'react';
import { useHistory } from 'react-router-dom';
// import UsersController from '../../controllers/Users';
import { Container } from './styles';

const Home: React.FC = () => {
  const history = useHistory();
  // const { createUser } = UsersController();

  if (localStorage.length === 0) {
    history.push('/login');
  }

  // useEffect(() => {
  //   const response = createUser({
  //     cpf: '123.123.123-12',
  //     email: 'teste@teste.com',
  //     endereco: {
  //       bairro: 'Bairro Teste',
  //       cep: 12312123,
  //       cidade: 'Cidade Teste',
  //       numero: 1,
  //       rua: 'Rua Teste',
  //     },
  //     name: 'Nome Teste',
  //   });

  //   console.log(response);
  // }, []);

  return (
    <Container>
      <h1>Home</h1>
    </Container>
  );
};

export default Home;
