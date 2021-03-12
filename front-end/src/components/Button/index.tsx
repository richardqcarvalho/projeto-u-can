import React from 'react';
import { ButtonProps } from '../../models/Button';
import { Container, Label } from './styles';

const Button: React.FC<ButtonProps> = ({ label, style, onClick }) => {
  return (
    <Container
      style={style}
      onClick={onClick}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}
    >
      <Label>{label.toUpperCase()}</Label>
    </Container>
  );
};

export default Button;
