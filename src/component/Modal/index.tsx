import { Container } from './styles';

interface IModal {
  children: string | JSX.Element | JSX.Element[];
  toogle: () => void;
}

const Modal = ({ children, toogle }: IModal) => {
  return (
    <Container>
      <button className='btn-shadow' type='button' onClick={() => toogle()}></button>
      <div className='content-modal'>{children}</div>
    </Container>
  );
};

export default Modal;
