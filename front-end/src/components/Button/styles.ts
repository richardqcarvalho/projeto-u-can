import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.button)`
  padding: 15px;
  background: var(--primary);
  font-size: 15px;
  border-radius: var(--border-radius);
  border-width: 0;
  width: var(--button-width);
  max-width: var(--button-max-width);
  max-width: 175px;
  outline: none;
  box-shadow: none;
  border-width: 0;
  cursor: pointer;
`;

export const Label = styled.span`
  color: var(--text);
  font-weight: bold;
`;
