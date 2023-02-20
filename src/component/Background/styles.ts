import styled from 'styled-components';

export const Container = styled.div`
  .fly {
    position: absolute;
    left: 0;
    height: 100vh;
    width: 100%;
    top: 0px;
    right: 10px;
    z-index: -1;
  }

  img {
    position: relative;
    opacity: 0.2;
    width: 98%;
    height: 99%;
    margin: auto;
    object-fit: cover;
    filter: blur(10px);
    border-radius: 1%;
  }
  @media (max-width: 730px) {
    /* width: 100%; */
  }
`;
