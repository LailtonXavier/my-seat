import { ToastContainer } from 'react-toastify';
import Home from './page/Home';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <Home />
      <ToastContainer autoClose={1700} className='toast-container' />
      <GlobalStyles />
    </>
  );
};

export default App;
