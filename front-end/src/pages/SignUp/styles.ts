import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  padding: var(--container-padding);
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  background: var(--container);
  justify-content: center;
  align-items: center;
  align-content: flex-end;
  border-radius: var(--border-radius);
`;
export const ErrorMessage = styled(motion.span)`
  color: var(--error);
  align-self: center;
  font-weight: bolder;
  margin: -10px 0 10px 0;
`;

export const Modal = styled(motion.div)`
  position: absolute;
  top: 10px;
  background: var(--container);
  padding: 30px;
  border-radius: var(--border-radius);
`;

export const Text = styled.span`
  color: #fff;
  font-size: 20px;
  font-weight: bolder;
`;
