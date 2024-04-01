
import { BagHeart,FileEarmark, FloppyFill, PersonCircle, PieChartFill, Table, WindowDesktop } from "react-bootstrap-icons";
import '../sidebar/sidebar.scss';
import { Link } from "react-router-dom";

const  Sidebar = ({ isExpanded }) =>{
    return(
        <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
        <div className="center">
          <ul>
            <li>
              <WindowDesktop className="icon" />
              <span><Link to="/home/dashboard" style={{ textDecoration: "none", color: 'white' }}>Dashboard</Link></span>

            </li>

            <li>
              <FileEarmark className="icon" />
              <span><Link to="/home/documents" style={{ textDecoration: "none", color: 'white' }}>Documents</Link></span>
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