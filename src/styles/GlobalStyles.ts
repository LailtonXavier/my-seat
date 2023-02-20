import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  @media (max-width: 1800px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
  /* body, input, textarea, button {
    font: 400 1.5rem 'Lato', sans-serif;
  } */
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: white;
  }
  li {
    list-style: none;
  }
  html{
     // Scroll
    background: #1B1A29;

    ::-webkit-scrollbar {
      width: 10px;
      background: #099;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px rbga(0,0,0,.5);
      border-radius: 5px;
      background: transparent;
      opacity: .5;
    }
    // color scroll
    ::-webkit-scrollbar-thumb {
      background: #099;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #099;
    }
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    color: #E6E8E9;
    background: #039BD4;
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: #E6E8E9;
    color:  rgba(223,60,5,0.9);;
  }
`;

export const ContainerMain = styled.div`
  max-width: 1400px;
  height: auto;
  margin: auto;
  overflow-x: hidden;
  overflow-y: auto;
  background: rgba(27, 26, 41, 0.6);
`;
