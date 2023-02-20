import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;

  /* height: 95%; */
  /* border: 1px solid #709; */

  img {
    width: 100%;
    /* height: 700px; */
  }

  .desc {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    color: #fff;
    font-family: 'Roboto', sans-serif;
  }
  .desc p {
    font-weight: 900;
    font-size: 1.5rem;
  }
  .icons {
    font-size: 1.1rem;
    margin-right: 0.5rem;
  }

  @media (max-width: 730px) {
    width: 100%;
    height: 80px;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 1px solid #352e4c;

    .desc {
      flex-direction: row;
      justify-content: space-around;
      height: 60px;
      p {
        font-size: 1rem;
        display: flex;
        align-items: center;
        margin: 0 0.3rem;
      }
    }
    .icons {
      font-size: 1.1rem;
      margin: 0 0.3rem;
      /* margin-top: 2px; */
    }

    img {
      border-radius: 50%;
      width: 60px;
      height: 50px;
      /* margin: 10px 5px; */
      object-fit: cover;
    }
  }
`;
