import React from 'react';
import { Container, Wrapper, Title, Description, Footer } from './styles';
import EditIcon from '../../assets/pen.svg';
import DeleteIcon from '../../assets/trash.svg';
import Clickable from '../Clickable';
import { CardProps } from '../../models/Card';

const Card: React.FC<CardProps> = ({
  name,
  birthDate,
  editFunction,
  deleteFunction,
}) => {
  return (
    <Container>
      <Wrapper onClick={editFunction}>
        <Title>Nome</Title>
        <Description>{name}</Description>
        <Title>Data de nascimento</Title>
        <Description>{new Date(birthDate).toLocaleDateString()}</Description>
      </Wrapper>
      <Footer>
        <Clickable onClick={editFunction} style={{ background: '#fff' }}>
          <img src={EditIcon} alt="Editar" style={{ height: 15 }} />
        </Clickable>
        <Clickable onClick={deleteFunction} style={{ background: '#fff' }}>
          <img src={DeleteIcon} alt="Deletar" style={{ height: 15 }} />
        </Clickable>
      </Footer>
    </Container>
  );
};

export default Card;
