
import '../Navbar/navbar.scss';
import { Gear, Justify } from "react-bootstrap-icons";
import { Bell } from "react-bootstrap-icons";
import { ChatLeft } from "react-bootstrap-icons";
//  import { useState } from 'react';

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="header">
          <h3>MyFacebook</h3>
          <div className="items ms-3" style={{ fontWeight: "150px" }}>  
          <button className="toggle-btn" onClick={toggleSidebar}>
          <Justify className="icon" style={{ width: "40px", height: "30%" }} /> 

      </button>       
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

    
    </div >
  );
};

export default Navbar;