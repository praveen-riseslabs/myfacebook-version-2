//import logo from './logo.svg';
import './App.css';

import {BrowserRouter} from 'react-router-dom';
import { AppRouter } from './appRouter';


function App() {
  return (
    
      <BrowserRouter>
      <AppRouter></AppRouter>
      </BrowserRouter>
    
  );
}

export default App;
