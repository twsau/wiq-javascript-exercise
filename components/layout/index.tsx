import styled from 'styled-components';

export const PageGrid = styled.div`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  grid-gap: 10px;
`;

export const MenuSection = styled.section`
  display: grid;
  align-content: center;
  grid-gap: 10px;
  max-width: 1000px;
  min-width: min(100%, 500px);
  padding: 1rem;
`;

export const Footer = styled.section`
  width: 100%;
  padding: 1rem;
  background-color: #5d5d5d;

  text-align: center;
  color: white;
`;
