import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--container-padding);
  background: #e5e5e5;
  border-radius: var(--border-radius) var(--border-radius) 0px 0px;
  outline: none;
  box-shadow: none;
  border-width: 0;
`;

export const Title = styled.span`
  font-weight: bolder;
  color: var(--text-secondary);
  text-align: center;
  margin: 5px 0px;
`;

export const Description = styled.span`
  color: var(--text-secondary);
  text-align: center;
  margin: 5px 0px;
`;

export const Footer = styled.div`
  width: 100%;
  left: 0;
  padding: 10px 20px;
  border-radius: 0px 0px var(--border-radius) var(--border-radius);
  bottom: 0;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
