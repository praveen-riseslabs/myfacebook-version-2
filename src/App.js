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