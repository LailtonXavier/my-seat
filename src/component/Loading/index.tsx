import { ContainerSpinner } from './styles';

const Loading = () => {
  return (
    <ContainerSpinner>
      <div className='spinner'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </ContainerSpinner>
  );
};

export default Loading;
