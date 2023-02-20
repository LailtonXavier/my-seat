import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  animation: showSlow 0.3s linear;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  .btn-shadow {
    animation: showSlow 0.3s linear;
    width: 100%;
    height: 100vh;
    background: #454;
    position: absolute;
    background: rgba(0, 0, 0, 0.3);
    border: none;
    outline: none;
  }

  .content-modal {
    background-color: white;
    z-index: 100;
    animation: showSlow 0.4s linear;
    background: rgba(27, 26, 41, 1);
    height: auto;
    border-radius: 10px;
    box-shadow: 2px 3px 20px rgba(200, 200, 200, 0.3);
    padding: 15px 10px;
  }

  @keyframes showSlow {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
