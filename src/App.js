import MainHeader from './component/MainHeader';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './component/home/Home';
import { BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <MainHeader></MainHeader>
      </BrowserRouter>
      <Home></Home>
      
    </>
  );
}

export default App;
