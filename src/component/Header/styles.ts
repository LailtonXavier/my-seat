import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Courier New', Courier, monospace;
  border-bottom: 1px solid #352e4c;

  h1 {
    color: #0c88e0;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    letter-spacing: -4px;
  }

  @media (max-width: 730px) {
    height: 40px;

    h1 {
      font-size: 1.5rem;
    }
  }
`;
