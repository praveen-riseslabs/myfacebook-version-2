
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
// import { ToastContainer,toast } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import {AppRouter } from './appRouter';
import { ToastContainer } from 'react-toastify';
//import FileUploader from './components/Awss3Buckets/fileuploader';
//import AwsS3Retrieve from './components/Awss3Buckets/fileretrive';
//import AwsS3UploaderMultiplefiles from './components/Awss3Buckets/multiplefiles';
//import {Dashboard } from './components/dashboard.component';
//import Report from './components/Pages/reports/reports';
//import { SampleReports } from './components/Pages/reports/samplereport';
//import { SampleReportsData } from './components/Pages/reports/samplereportsdata';

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
      <AppRouter>
      </AppRouter> 
      <ToastContainer theme='light'></ToastContainer>
    <ToastContainer theme='dark'></ToastContainer>
    {/* <Dashboard></Dashboard>*/}
    <AppRouter></AppRouter>
     {/* <Report></Report> */}
     {/* < FileUploader></FileUploader>  */}
     {/* <AwsS3Retrieve></AwsS3Retrieve> */}
     {/* <SampleReports></SampleReports> */}
      {/* <SampleReportsData></SampleReportsData> */}
    {/* <AwsS3UploaderMultiplefiles></AwsS3UploaderMultiplefiles> */}

    </BrowserRouter>
  );
}
import "../src/styles/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from './components/login.component';
import Dashboard from "./pages/dashboard";
import Documents from "./pages/documents";
import Uielements from "./pages/uielements";
import Formelements from "./pages/formelements";
import Charts from "./pages/charts";
import Tables from "./pages/tables";
import Icons from "./pages/icons";
import Userpages from "./pages/userpages";
import Errorpages from "./pages/errorpages";
import Sidebar from "./components/sidebar";

function App() {
    return (
        <Router>
            <div className="App">
                <Sidebar />
                <Routes>
                    <Route path='/login' element={<Login></Login>}></Route>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/documents" element={<Documents />} />
                    <Route path="/uielements" element={<Uielements />} />
                    <Route path="/formelements" element={<Formelements />} />
                    <Route path="/charts" element={<Charts />} />
                    <Route path="/tables" element={<Tables />} />
                    <Route path="/icons" element={<Icons/>}/>
                    <Route path="/users" element={<Userpages />} />
                    <Route path="/error" element={<Errorpages />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

