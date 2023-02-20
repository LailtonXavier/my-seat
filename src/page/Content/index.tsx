import { useEffect, useState } from 'react';
import CardMain from '../../component/CardMain';
import Loading from '../../component/Loading';
import Modal from '../../component/Modal';
import axios from '../../services/axios';
import AddName from '../AddName';
import { About, Container } from './styles';

interface IAllSeats {
  name: string;
  numberSeat: number;
}

interface IDatas {
  data: IAllSeats[];
}
interface IContent {
  setOpen: (value: boolean) => void;
}

const Content = () => {
  const [allSeats, setAllSeats] = useState<IAllSeats[]>([]);
  let calcNames = 0;
  let calcTOSeat = 0;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [nameStorage, setNameStorage] = useState<string>('');
  const [numberSeat, setNumberSeat] = useState<number>(0);

  const toogle = () => {
    setOpen(!open);
  };

  const getAllData = async () => {
    setIsLoading(true);
    const { data }: IDatas = await axios.get('/seat');
    console.log(data);
    setAllSeats(data);
    setIsLoading(false);
  };
  useEffect(() => {
    getAllData();
  }, []);

  const hasName = (name: string, id: string): string => {
    if (name === id) {
      calcTOSeat += 1;
      return 'empty';
    }
    calcNames += 1;
    return 'your-seat';
  };

  const addUser = async (id: number) => {
    try {
      setIsLoading(true);
      const res = await axios.put(`/seat/${id}`, { name });
      if (res.status === 200) {
        getAllData();
        toogle();
        setName('');
      }
    } catch (error) {
      toogle();
      console.error(error);
    } finally {
      toogle();
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <CardMain>
        <Container>
          <div className='screen'></div>
          <>
            {allSeats.map((item, index: number) => (
              <div key={String(index)}>
                {
                  <button
                    type='button'
                    className={`element ${hasName(
                      item.name,
                      String(item.numberSeat),
                    )}`}
                    onClick={() => {
                      toogle();
                      setNumberSeat(item.numberSeat);
                      setNameStorage(item.name);
                    }}
                  >
                    {item.numberSeat}
                  </button>
                }
              </div>
            ))}
          </>
        </Container>
        <About>
          <span className='container-s'>
            <p className='square s1'></p>
            <p className='calc-names'>0</p>
            <p className='title-aseat'>Resevado</p>
          </span>
          <span className='container-s'>
            <p className='square s2'></p>
            <p className='calc-names'>{calcTOSeat}</p>
            <p className='title-aseat'>Vazio</p>
          </span>
          <span className='container-s'>
            <p className='calc-names'>{calcNames}</p>
            <p className='square s3'></p>
            <p className='title-aseat'>Seu assento</p>
          </span>
        </About>
      </CardMain>
      {open && (
        <>
          <Modal toogle={() => toogle()}>
            <AddName
              nameStorage={nameStorage}
              myAseat={numberSeat}
              nameInput={name}
              setName={setName}
              addUser={() => addUser(numberSeat)}
            />
          </Modal>
        </>
      )}
    </>
  );
};

export default Content;
