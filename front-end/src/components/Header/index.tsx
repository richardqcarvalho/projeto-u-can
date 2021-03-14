import React from 'react';
import LogoutIcon from '../../assets/logout.svg';
import { Container } from './styles';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/login" onClick={() => localStorage.clear()}>
        <img src={LogoutIcon} alt="Sair" style={{ height: 40 }} />
      </Link>
    </Container>
  );
};

export default Header;
