
import { BagHeart, FileEarmark, FloppyFill, PersonCircle, PieChartFill, Table, WindowDesktop } from "react-bootstrap-icons";
import '../sidebar/sidebar.scss';
import { Link } from "react-router-dom";
import React, { useState,useEffect } from 'react';


const Sidebar = ({ isExpanded }) => {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function() {
      var navoptions = document.querySelectorAll('.navoption');

      navoptions.forEach(function(navoption) {
          var submenu = navoption.querySelector('.submenu');

          navoption.addEventListener('click', function() {
              // Toggle display of submenu
              submenu.classList.toggle('show');
          });
      });
    });
  }, []);

  const handleMouseEnter = () => {
    setIsSubMenuVisible(true);
  };
  const handleMouseLeave = () => {
    setIsSubMenuVisible(false);
  };
  const handleViewDocumentsClick = () => {
    // Perform any actions needed when "View Documents" is clicked
    console.log("View Documents clicked");
  };

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="center">
        <ul>
          <li>
            <WindowDesktop className="icon" />
            <span><Link to="/home/dashboard" style={{ textDecoration: "none", color: 'white' }}>Dashboard</Link></span>

          </li>

          <li>
            <FileEarmark className="icon" />
            <span  className="documents-menu"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <Link to="/home/documents" style={{ textDecoration: "none", color: 'white' }}>Documents</Link></span>
              {isSubMenuVisible && (
              <div className="submenu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ul>
                  <li><Link to="/home/viewdocuments">View Documents</Link></li>
                  {/* Add more submenu items as needed */}
                </ul>
              </div>
            )}
          </li>
          <li>
            <FloppyFill className="icon" />
            <span><Link to="/home/reports" style={{ textDecoration: "none", color: 'white' }}>Reports</Link></span>
          </li>

          <li>
            <Table className="icon" />
            <span><Link to="/home/tables" style={{ textDecoration: "none", color: 'white' }}>Tables</Link></span>
          </li>
          <li>
            <PieChartFill className="icon" />
            <span><Link to="/home/charts" style={{ textDecoration: "none", color: 'white' }}>Charts</Link></span>
          </li>
          <li>
            <PersonCircle className="icon" />
            <span><Link to="/home/userpages" style={{ textDecoration: "none", color: 'white' }}>Userpages</Link></span>
          </li>
          <li>
            <BagHeart className="icon" />
            <span><Link to="/home/icons" style={{ textDecoration: "none", color: 'white' }}>Icons</Link></span>
          </li>
        </ul>
      </div>
    </div>

  )
}
export default Sidebar;