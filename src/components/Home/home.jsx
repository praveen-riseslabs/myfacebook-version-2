import React, { useState } from 'react';
import './home.scss';
import Navbar from '../../components/Navbar/navbar.jsx';
import Sidebar from '../../components/sidebar/sidebar.jsx';
 import { HomeRouter } from '../../homerouter.js';
import { AppRouter } from '../../appRouter.js';



 const Home = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="home">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className='row'>
        <div className='side-bar col-md-3'>
          <Sidebar isExpanded={isSidebarExpanded} />
        </div>
        <div className="col-md-9">
        
         <div className="content">
           <HomeRouter></HomeRouter>
          </div> 
        </div>
      </div>
    </div>
  );
};
export default Home;
