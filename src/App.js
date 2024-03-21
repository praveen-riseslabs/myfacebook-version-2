import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {AppRouter } from './appRouter';
import { ToastContainer } from 'react-toastify';
//import {Dashboard } from './components/dashboard.component';
function App() {
  return (
    <BrowserRouter>
    <ToastContainer theme='dark'></ToastContainer>
    {/* <Dashboard></Dashboard> */}
    <AppRouter></AppRouter>
    </BrowserRouter>
  );
}

export default App;
