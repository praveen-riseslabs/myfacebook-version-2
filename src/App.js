
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/home.jsx';
import { Signup } from './components/registrationpage/signup';
import { Login } from './components/Login/login.component.jsx';
import { Forgotpassword } from './components/forgotpassword/forgotpass.component';
import { Resetpassword } from './components/Resetpassword/resetpass.component.jsx';
import { AppRouter } from './appRouter.js';
// import AwsS3Uploader from './components/Awss3bucket/uploadfiles.js';
// import AwsS3Retrieve from './components/Awss3bucket/retrieve.js';
// import AwsS3UploaderMultiplefiles from './components/Awss3bucket/multiplefiles.js';
import { HomeRouter } from './homerouter.js';
import { Documents } from './components/Pages/documents/documents.jsx';
// import { ToastContainer,toast } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import {AppRouter } from './appRouter';
import { ToastContainer } from 'react-toastify';

function App() {
  const { ToastContainer } = require('react-toastify');
  require('react-toastify/dist/ReactToastify.css');

  return (

    <BrowserRouter>
      {/* <FileUploader></FileUploader> */}
      {/* <AwsS3Uploader></AwsS3Uploader>    */}
      {/* <AwsS3Retrieve></AwsS3Retrieve> */}
      {/* <AwsS3UploaderMultiplefiles></AwsS3UploaderMultiplefiles>  */}
      {/* <Home></Home> */}
      {/* <Login></Login> */}
      {/* <Signup/>   */}
       <AppRouter></AppRouter>  
      {/* <Documents></Documents> */}
      <ToastContainer theme='light'></ToastContainer>
   

    </BrowserRouter>
  );
}
export default App;

