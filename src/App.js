//import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {AppRouter } from './appRouter';
//import {Dashboard } from './components/dashboard.component';
function App() {
  return (
    <BrowserRouter>
    {/* <Dashboard></Dashboard> */}
    <AppRouter></AppRouter>
    </BrowserRouter>
  );
}

export default App;
