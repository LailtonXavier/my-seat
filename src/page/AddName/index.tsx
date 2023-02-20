import { Container, Reserved } from './styles';
import {
  BsEmojiSmile,
  BsEmojiWink,
  BsFillEmojiHeartEyesFill,
} from 'react-icons/bs';

interface IAddName {
  setName: (value: string) => void;
  nameInput: string;
  nameStorage: string;
  myAseat: number;
  addUser: () => void;
}

const AddName = ({
  setName,
  nameInput,
  myAseat,
  nameStorage,
  addUser,
}: IAddName) => {
  return (
    <Container>
      {nameStorage === String(myAseat) ? (
        <form>
          <p className='name-modal'>
            Número do assento: <span>{myAseat}</span>
          </p>
          <div className='container-cons-add'>
            {nameInput.length > 0 ? (
              <BsFillEmojiHeartEyesFill />
            ) : (
              <BsEmojiSmile />
            )}
            <input
              className='input-modal'
              type='text'
              placeholder='Digite seu nome'
              value={nameInput}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                e.preventDefault();
                setName(e.target.value);
              }}
            />
          </div>
          <button className='btn-send' type='submit' onClick={addUser}>
            Confirmar
          </button>
        </form>
      ) : (
        <Reserved>
          <p className='ticket'>Ticket N° {myAseat}</p>
          <p className='name-ticket'>
            Resevado para{' '}
            {nameStorage.charAt(0).toUpperCase() + nameStorage.slice(1)}
            <BsEmojiWink className='icon-ticket' />
          </p>
        </Reserved>
      )}
    </Container>
  );
};

export default AddName;
