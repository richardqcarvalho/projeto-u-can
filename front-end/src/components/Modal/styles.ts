import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px var(--container-padding) var(--container-padding)
    var(--container-padding);
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  background: var(--secondary);
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius);
  position: absolute;
`;
