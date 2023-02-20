import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #352e4c;
  position: relative;

  h6 {
    position: absolute;
    bottom: 30%;
    color: #fff;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
  }

  @media (max-width: 730px) {
    height: 40px;
    margin: 20px 0;

    h6 {
      bottom: 30%;
      font-size: 0.7rem;
    }
  }
`;
