<<<<<<< HEAD
//import logo from './logo.svg';
=======
<<<<<<< HEAD

>>>>>>> aa9a89d85020cb8229ed4231e9257ad24dd07cb0
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';
// import {AppRouter } from './appRouter';
// import {Dashboard } from './components/dashboard.component';
// import { Login } from './components/login.component';
// import { Signup } from './components/registrationpage/signup';
import { Home } from './components/Home/home';
// import { Registration} from './components/registrationpage/signup';


import {BrowserRouter} from 'react-router-dom';
import { AppRouter } from './appRouter';


function App() {
  return (
<<<<<<< HEAD
    
      <BrowserRouter>
      <AppRouter></AppRouter>
      </BrowserRouter>
    
=======
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
>>>>>>> aa9a89d85020cb8229ed4231e9257ad24dd07cb0
  );
}

export default App;






// import React from 'react';
// import DashboardNavbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import MainContent from './components/MainContent';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <div>
//       <DashboardNavbar />
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-md-3">
//             <Sidebar />
//           </div>
//           <div className="col-md-9">
//             <MainContent />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;