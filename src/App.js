
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
<<<<<<< Updated upstream
import Home from './components/Home/home.jsx';
// import { Signup } from './components/registrationpage/signup';
 import { Login } from './components/Login/login.component.jsx';
import { AppRouter } from './appRouter.js';
// import S3Uploader from './components/Awss3bucket/uploadfiles.js';
import Aws from './components/Awss3bucket/uploadfiles.js'
import { HomeRouter } from './homerouter.js';
// import { ToastContainer,toast } from 'react-toastify';


function App() {
  const { ToastContainer} = require('react-toastify');
require('react-toastify/dist/ReactToastify.css');
  
  return (
    
    <BrowserRouter>
     {/* <Aws></Aws>  */}
    {/* <S3Uploader></S3Uploader> */}
         {/* <Home></Home>    */}
       {/* <Login></Login>    */}
      {/* <Signup/> */}
        <AppRouter>
        {/* <Home></Home>    */}
        </AppRouter>  
      <ToastContainer theme='dark'></ToastContainer>
=======

//  import Navbar from './components/Navbar/navbar';

 import {AppRouter } from './appRouter';
// import {Dashboard } from './components/dashboard.component';
 import { Login } from './components/login.component';
 import { Signup } from './components/registrationpage/signup';
import Home from './components/Home/home';

// import { Registration} from './components/registrationpage/signup'


function App() {
  
  const { toast } = require('react-toastify');
  require('react-toastify/dist/ReactToastify.css');
  return (

    <BrowserRouter>
   
  <Home></Home>
    
    <AppRouter> 
    </AppRouter>
     Toast
</BrowserRouter>
  )
>>>>>>> Stashed changes

    </BrowserRouter>
  )
}

export default App;






