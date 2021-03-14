import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../../components/Card';
import Header from '../../components/Header';
import UserController from '../../controllers/User';
import { Container, Wrapper } from './styles';
import { v4 as uuid } from 'uuid';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import Input from '../../components/Input';

let name: string;
let birthDate: string;

const Home: React.FC = () => {
  const {
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
  } = UserController();
  const history = useHistory();

  if (localStorage.length === 0) {
    history.push('/login');
  }

  return (
    <Container>
      <Header />
      <Modal
        onClose={() => closeCreateModal()}
        visible={createModal}
        style={{ paddingTop: 60 }}
      >
        <Input
          onKeyPress={e => {
            if (e.key === 'Enter') createUser({ name, birthDate });
          }}
          type="text"
          placeholder="Nome completo"
          onChange={e => (name = e.target.value)}
          style={{
            borderWidth: setBorder(nameEmpty),
            borderColor: 'red',
          }}
        />
        <Input
          onKeyPress={e => {
            if (e.key === 'Enter') createUser({ name, birthDate });
          }}
          type="date"
          onChange={e => (birthDate = e.target.value)}
          style={{
            borderWidth: setBorder(birthDateEmpty),
            borderColor: 'red',
          }}
        />
        <Button
          label="Salvar"
          onClick={() => createUser({ name, birthDate })}
        />
      </Modal>
      <Modal
        onClose={() => closeUpdateModal()}
        visible={updateModal}
        style={{ paddingTop: 60 }}
      >
        <Input
          onKeyPress={e => {
            if (e.key === 'Enter') updateUser({ name, birthDate });
          }}
          type="text"
          placeholder="Nome completo"
          onChange={e => (name = e.target.value)}
          style={{
            borderWidth: setBorder(nameEmpty),
            borderColor: 'red',
          }}
        />
        <Input
          type="date"
          onChange={e => (name = e.target.value)}
          style={{
            borderWidth: setBorder(birthDateEmpty),
            borderColor: 'red',
          }}
        />
        <Button
          label="Salvar"
          onClick={() => updateUser({ name, birthDate })}
        />
      </Modal>
      <Wrapper key={uuid()}>
        {users.map(user => {
          return (
            <Card
              key={uuid()}
              name={user.name}
              birthDate={user.birthDate}
              editFunction={() => openUpdateModal()}
              deleteFunction={() => deleteUser(user)}
            />
          );
        })}
      </Wrapper>
      <Button
        label="Cadastrar usuário"
        onClick={() => openCreateModal()}
        style={{ marginTop: 20, maxWidth: 150 }}
      />
    </Container>
  );
};

export default Home;
