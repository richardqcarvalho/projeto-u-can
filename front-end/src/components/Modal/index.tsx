import React from 'react';
import Clickable from '../Clickable';
import { Container } from './styles';
import CloseIcon from '../../assets/times.svg';
import { ModalProps } from '../../models/Modal';

const Modal: React.FC<ModalProps> = ({ children, onClose, style, visible }) => {
  return (
    <Container style={{ ...style, display: `${visible ? 'flex' : 'none'}` }}>
      <Clickable
        onClick={onClose}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
          position: 'absolute',
          right: 10,
          top: 10,
          background: '#192a56',
          padding: 10,
          width: 30,
          height: 30,
        }}
      >
        <img src={CloseIcon} alt="Página Inicial" style={{ height: 15 }} />
      </Clickable>
      {children}
    </Container>
  );
};

export default Modal;
