import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  .screen {
    width: 100%;
    margin-bottom: 40px;
    height: 5px;
    background-color: rgba(22, 169, 232, 0.9);
    border-radius: 50%;
    /* box-shadow: 25px 10px 0 0 gray; */
    box-shadow: 10px 30px 30px 30px #16a9e8;
  }

  .element {
    color: #fff;
    background: transparent;
    text-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 0 1px #fff, 0 0 40px #16a9e8,
      0 0 80px #16a9e8, 0 0 90px #16a9e8, 0 0 100px #16a9e8, 0 0 150px #16a9e8;
    font-size: 1.5rem;
    width: 60px;
    height: 60px;
    border-radius: 20px;
    margin: 8px 6px;
    border: 1px solid #352e4c;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;
  }

  .element:hover {
    transform: scale(1.2);
  }

  .element:active {
    transform: translateY(10px);
  }

  .reserved {
    background: #352e4c;
    text-shadow: 0 0 2px #352e4c, 0 0 1px #352e4c, 0 0 2px #352e4c,
      0 0 40px #16a9e8, 0 0 80px #16a9e8, 0 0 90px #16a9e8, 0 0 100px #16a9e8,
      0 0 150px #16a9e8;
  }

  .your-seat {
    background: #71409e;
    color: #352e4c;
    text-shadow: 0 0 2px #352e4c, 0 0 1px #352e4c, 0 0 2px #352e4c,
      0 0 40px #16a9e8, 0 0 80px #16a9e8, 0 0 90px #16a9e8, 0 0 100px #16a9e8,
      0 0 150px #16a9e8;
    box-shadow: 2px 2px 12px rgba(10, 10, 10, 0.9);
  }

  @media (max-width: 730px) {
    width: 100%;

    .element {
      width: 50px;
      height: 50px;
      margin: 1px 1.5px;
    }
  }
`;

export const About = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 5px;

  .about-seat span {
    text-align: center;
  }

  .square,
  .your-seat {
    width: 60px;
    height: 60px;
    border-radius: 20px;
    margin: 8px 6px;
    border: 1px solid #352e4c;
  }

  .s1 {
    background: #352e4c;
  }

  .s3 {
    background: #71409e;
  }

  .title-aseat {
    font-style: normal;
    font-size: 1rem;
    color: #fff;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  .container-s {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .calc-names {
    position: absolute;
    top: 28%;
    font-style: normal;
    font-size: 1.5rem;
    color: #fff;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  @media (max-width: 730px) {
    .square {
      width: 50px;
      height: 50px;
    }

    .calc-names {
      top: 28%;
      font-size: 1.3rem;
    }
  }
`;
