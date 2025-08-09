import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import { WebRouter,Adminrouter} from "./Router";

function App() {
  return (
    <BrowserRouter>
    <WebRouter></WebRouter>
    <Adminrouter></Adminrouter>
    </BrowserRouter>
      
  );
}

export default App;
