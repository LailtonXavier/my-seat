import { ContainerMain } from '../../styles/GlobalStyles';
import Header from '../../component/Header';
import { Container } from './styles';
import Movie from '../../component/Movie';
import Background from '../../component/Background';
import Footer from '../../component/Footer';
import cartaz from '../../assets/cartaz.png';
import 'react-responsive-modal/styles.css';
import Content from '../Content';
import { useState } from 'react';
import AddName from '../AddName';

const Home = () => {
  return (
    <ContainerMain>
      <Container>
        <Background photo={cartaz} />
        <Header />
        <Movie photo={cartaz} />
        <Content />
        <Footer />
      </Container>
    </ContainerMain>
  );
};
export default Home;
