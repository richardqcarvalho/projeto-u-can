import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: var(--login-container-flex-direction);
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  background: var(--container);
  border-radius: var(--border-radius);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 50px;
`;

export const Divider = styled.div`
  width: var(--login-divider-width);
  height: var(--login-divider-height);
  background: var(--primary);
`;

export const ErrorMessage = styled(motion.span)`
  margin: -15px 0 10px 0;
  color: red;
`;

export const Modal = styled(motion.div)`
  position: absolute;
  background: green;
  padding: 50px;
  border-radius: var(--border-radius);
`;

export const Text = styled.span`
  color: #fff;
  font-size: 20px;
`;

export const CloseButton = styled(motion.button)`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  position: absolute;
  right: -12.5px;
  top: -12.5px;
`;
