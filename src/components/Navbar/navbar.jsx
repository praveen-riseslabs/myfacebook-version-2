
import '../Navbar/navbar.scss';
import { BagHeart,Bug , FileEarmark, FloppyFill, PersonCircle, PieChartFill, Table, WindowDesktop } from "react-bootstrap-icons";
// import '../Sidebar/sidebar.scss';
import { Link } from "react-router-dom";
import { Gear, Justify } from "react-bootstrap-icons";
import { Bell } from "react-bootstrap-icons";
import { ChatLeft } from "react-bootstrap-icons";
// import { useState } from 'react';

const Navbar = () => {
  // const [sidebarCollapse,setSidebarCollapse]=useState(false);
    return (
        <div className="navbar">
        <div className="wrapper">
          <div className="header">
           <h3>MyFacebook</h3>
           <div className="items ms-3" style={{fontWeight:"150px"}}>
              <Justify className="icon" style={{ width: "40px", height: "30%" }} />
            </div>
          </div>
          <div className="items">
            {/* <div className="item">
              <Globe className="icon" />
              English
            </div> */}
            <div className="item">
              <Bell className="icon" />
              <div className="counter">1</div>
            </div>
            <div className="item">
              <ChatLeft className="icon" />
              <div className="counter">2</div>
            </div>
            <div className="item">
              <Gear className="icon" />
            </div>
          </div>
        </div>
      
       <div className='sidebar'>
       <div className="center " id="collapsibleNavbar">
           <div>
           <div className="item">
           <img
             src={require('../../Assests/images/girlpic.jpg')}
             alt=""
             style={{ width: "50px", height: "30%" }}
             className="bg-info rounded-circle m-1"
           />
           <span style={{ color:"white",fontSize:"20px" }}>Rajani</span>
           
         </div>
         
           </div>
         <ul>
           <li>
             <WindowDesktop className="icon" />
             <span>Dashboard</span>
             <Link to="/dashboard" style={{ textDecoration: "none" }}/>
           </li>
           {/* <Link to="/dashboard" style={{ textDecoration: "none" }}> */}
             <li>
               <FileEarmark className="icon" />
               <span>Documents</span>
             </li>
          
           <Link to="/documents" style={{ textDecoration: "none" }}>
             <li>
               <FloppyFill className="icon" />
               <span>Reports</span>
             </li>
           </Link>
           <li>
             <Table className="icon" />
             <span>Tables</span>
           </li>
           <li>
           <PieChartFill className="icon" />
             <span>Charts</span>
           </li>
           <li>
             <PersonCircle className="icon" />
             <span>userpages</span>
           </li>
           <li>
             <BagHeart className="icon" />
             <span>Icons</span>
           </li>
           <li>
             <Bug className="icon" />
             <span>errorpages</span>
           </li>
         </ul>
     </div>
     </div>
     </div>
    );
  };
  
  export default Navbar;