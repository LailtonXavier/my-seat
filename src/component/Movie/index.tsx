import { BsClockHistory, BsSkipStartCircle } from 'react-icons/bs';
import { MdOutlineDateRange } from 'react-icons/md';
import { Container } from './styles';

interface IMovie {
  photo: string;
}
const Movie = ({ photo }: IMovie) => {
  return (
    <Container>
      <img src={photo} alt='movie-cartaz' />
      <div className='desc'>
        <p>A Jornada</p>

        <p>
          <BsClockHistory className='icons' />
          1:44:19 min
        </p>
        <p>
          <BsSkipStartCircle className='icons' />
          17:30 PM
        </p>
        <p>
          <MdOutlineDateRange className='icons' />
          20 - 02 - 2023
        </p>
      </div>
    </Container>
  );
};

export default Movie;
