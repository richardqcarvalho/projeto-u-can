import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

const Clickable: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  onClick,
  style,
}) => {
  return (
    <Container
      onClick={onClick}
      style={style}
      whileHover={{
        scale: 1.2,
      }}
      whileTap={{
        scale: 0.8,
      }}
    >
      {children}
    </Container>
  );
};

export default Clickable;
