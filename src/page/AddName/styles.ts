import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2rem;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .name-modal {
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 1.3rem;
    font-weight: 900;
    margin-bottom: 0.8rem;
  }

  .name-modal span {
    width: 80px;
    height: 60px;
    border: 1px solid #352e4c;
    padding: 4px;

    border-radius: 8px;
  }

  .input-modal {
    width: 250px;
    height: 35px;
    padding-left: 8px;
    background: #fcfcfc;
    border-radius: 4px;
    font-size: 1.2rem;
    border: 0.5px solid #ccc;
    outline: none;
    font-weight: 600;
    margin-left: 10px;
    color: rgba(10, 0, 0, 0.6);
  }

  .input-modal:focus {
    border-bottom: 1px solid #352e4c;
  }

  .container-cons-add {
    display: flex;
    align-items: center;
    height: 40px;
    color: #71409e;
  }

  .btn-send {
    width: 150px;
    height: 35px;
    margin-top: 0.8rem;
    border-radius: 4px;
    background: #71409e;
    border: none;
    color: white;
    font-size: 0.9rem;
    font-weight: 300;
    font-style: normal;
    box-shadow: 1px 2px 15px #71409e;
    transition: all 0.2s linear;
  }

  .btn-send:hover {
    transform: translateY(-3px);
    box-shadow: 1px 2px 25px #71409e;
  }

  .btn-send:active {
    transform: scale(1.1);
  }

  @keyframes showSlow {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 730px) {
    .name-modal span {
      width: 50px;
      height: 50px;
    }
  }
`;

export const Reserved = styled.div`
  width: 330px;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  text-align: center;
  height: 100px;
  border: 1px dotted #352e4c;
  border-radius: 10px;
  border-left: 10px dotted #352e4c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 2px 2px 15px rgba(113, 64, 158, 0.5);

  .ticket {
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    font-weight: 900;
    border-bottom: 1px solid whitesmoke;
  }

  .icon-ticket {
    margin-left: 10px;
  }
`;
