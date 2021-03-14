import styled from 'styled-components';

export const Container = styled.div`
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
  max-height: 70vh;
`;

export const Wrapper = styled.div`
  height: auto;
  max-height: 60vh;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 0 !important;
  }
  -ms-overflow-style: none;
  overflow-y: -moz-scrollbars-none;
`;
