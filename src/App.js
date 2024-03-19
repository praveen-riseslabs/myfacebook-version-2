<<<<<<< HEAD
//import logo from './logo.svg';
import './App.css';

import {BrowserRouter} from 'react-router-dom';
import { AppRouter } from './appRouter';
=======


import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';

// import {AppRouter } from './appRouter';
// import {Dashboard } from './components/dashboard.component';
// import { Login } from './components/login.component';
// import { Signup } from './components/registrationpage/signup';

// import { Registration} from './components/registrationpage/signup';
>>>>>>> 58be2cb (added files)


function App() {
  return (
<<<<<<< HEAD
    
      <BrowserRouter>
      <AppRouter></AppRouter>
      </BrowserRouter>
    
  );
=======
    <BrowserRouter>
    {/* <Signup></Signup> */}
    <Navbar></Navbar>
    {/* <Sidebar></Sidebar> */}
     
</BrowserRouter>
  )
>>>>>>> 58be2cb (added files)
}
export default App;