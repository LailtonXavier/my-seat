import { Container } from './styles';

interface ICardMain {
  children: string | JSX.Element | JSX.Element[];
}

const CardMain = ({ children }: ICardMain) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

export default CardMain;
