import styled from 'styled-components';

export const ContainerSpinner = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  animation: showSlow 0.1s linear;
  display: flex;
  /* background: rgba(27, 26, 41, 0.9); */
  background-image: radial-gradient(
    rgba(27, 26, 41, 0.9),
    rgba(0, 0, 0, 0.5),
    black
  );
  justify-content: center;
  align-items: center;
  z-index: 1;

  .spinner {
    width: 11.2px;
    height: 11.2px;
    animation: spinner-o824ag 1s infinite linear;
  }

  .spinner div {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #71409e;
    border-radius: 50%;
    animation: spinner-vse6n7 1.25s infinite ease;
  }

  .spinner div:nth-child(1) {
    --rotation: 90;
  }

  .spinner div:nth-child(2) {
    --rotation: 180;
  }

  .spinner div:nth-child(3) {
    --rotation: 270;
  }

  .spinner div:nth-child(4) {
    --rotation: 360;
  }

  @keyframes spinner-vse6n7 {
    0%,
    100% {
      transform: rotate(calc(var(--rotation) * 1deg)) translateY(0);
    }

    50% {
      transform: rotate(calc(var(--rotation) * 1deg)) translateY(300%);
    }
  }

  @keyframes spinner-o824ag {
    to {
      transform: rotate(360deg);
    }
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
