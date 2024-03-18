<<<<<<< HEAD

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';
// import {AppRouter } from './appRouter';
// import {Dashboard } from './components/dashboard.component';
// import { Login } from './components/login.component';
// import { Signup } from './components/registrationpage/signup';
import { Home } from './components/Home/home';
// import { Registration} from './components/registrationpage/signup';


function App() {
  return (
    <BrowserRouter>
    {/* <Signup></Signup> */}
    <Home></Home>
    
    {/* <AppRouter></AppRouter> */}
=======
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
>>>>>>> b9ed900e08d8e8f8be7c76f3d2787d2c276b7523
    </BrowserRouter>
  );
}

export default App;
