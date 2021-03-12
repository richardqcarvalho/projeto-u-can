import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

const Clickable: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  onClick,
  style,
}) => {
  return (
    <Container onClick={onClick} style={style}>
      {children}
    </Container>
  );
};

export default Clickable;
