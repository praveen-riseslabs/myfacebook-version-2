
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
        </ul>
      </div>
    </div>
    
    )
}
export default Sidebar;