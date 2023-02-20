import { Container } from './styles';

interface IBackground {
  photo: string;
}
const Background = ({ photo }: IBackground) => {
  return (
    <Container>
      <div className='fly'>
        <img src={photo} alt='background-img' />
      </div>
    </Container>
  );
};

export default Background;
