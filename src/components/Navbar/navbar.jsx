
import '../Navbar/navbar.scss';
import { BagHeart, Bug, FileEarmark, FloppyFill, PersonCircle, PieChartFill, Table, WindowDesktop } from "react-bootstrap-icons";
// import '../Sidebar/sidebar.scss';
import { Link } from "react-router-dom";
import { Gear, Justify } from "react-bootstrap-icons";
import { Bell } from "react-bootstrap-icons";
import { ChatLeft } from "react-bootstrap-icons";
 import { useState } from 'react';

const Navbar = () => {
   const [navbarCollapse,setNavbarCollapse]=useState(false);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="header">
          <h3>MyFacebook</h3>
          <div className="items ms-3" style={{ fontWeight: "150px" }}>
            <Justify className="icon" style={{ width: "40px", height: "30%" }} onClick={e => setNavbarCollapse (!navbarCollapse)} />
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

      <div className= " sidebar">
        <div className="center" >
          <div>
            <div className="item">
              <img
                src={require('../../Assests/images/girlpic.jpg')}
                alt=""
                style={{ width: "50px", height: "30%" }}
                className="bg-info rounded-circle m-1"
              />
              <span style={{ color: "white", fontSize: "20px" }}>Rajani</span>

            </div>

          </div>
          <ul>
            <li>
              <WindowDesktop className="icon" />
              <span><Link to="/dashboard" style={{ textDecoration: "none", color: 'white' }}>Dashboard</Link></span>

            </li>

            <li>
              <FileEarmark className="icon" />
              <span><Link to="/documents" style={{ textDecoration: "none", color: 'white' }}>Documents</Link></span>
            </li>

            <Link to="/documents" style={{ textDecoration: "none" }}>
              <li>
                <FloppyFill className="icon" />
                <span><Link to="/reports" style={{ textDecoration: "none", color: 'white' }}>Reports</Link></span>
              </li>
            </Link>
            <li>
              <Table className="icon" />
              <span><Link to="/tables" style={{ textDecoration: "none", color: 'white' }}>Tables</Link></span>
            </li>
            <li>
              <PieChartFill className="icon" />
              <span><Link to="/charts" style={{ textDecoration: "none", color: 'white' }}>Charts</Link></span>
            </li>
            <li>
              <PersonCircle className="icon" />
              <span><Link to="/userpages" style={{ textDecoration: "none", color: 'white' }}>Userpages</Link></span>  
          </li>
          <li>
            <BagHeart className="icon" />
            <span><Link to="/icons" style={{ textDecoration: "none", color: 'white' }}>Icons</Link></span>
          </li>
          <li>
            <Bug className="icon" />
            <span><Link to="/errorpages" style={{ textDecoration: "none", color: 'white' }}>Errorpages</Link></span>
          </li>
        </ul>
      </div>
    </div>
    </div >
  );
};

export default Navbar;