import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 10px;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow-y: auto;

  @media (max-width: 730px) {
    align-items: center;
    justify-content: center;
  }
`;
