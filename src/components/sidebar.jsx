import React, { useState } from "react";
import Icon from "../images/Icon.svg";
import Profile from "../images/profile.png";
import Dashboard from "../images/dashboard.svg";
import Transactions from "../images/transactions.svg";
import Performance from "../images/performance.svg";
import News from "../images/news.svg";
import Settings from "../images/settings.svg";
import Support from "../images/support.svg";
import { useLocation } from "react-router-dom";


const Sidebar = () => {
    const location = useLocation();

    const [closeMenu, setCloseMenu] = useState(false);

    const handleCloseMenu = () => {
        setCloseMenu(!closeMenu);
    };

    return (
        <div className={closeMenu === false ? "sidebar" : "sidebar active"}>
            <div
                className={closeMenu === false? "logoContainer": "logoContainer active"}>
                <img src={Icon} alt="icon" className="logo" />
                <h2 className="title">FaceBook. </h2>
            </div>
            <div
                className={closeMenu === false? "burgerContainer": "burgerContainer active"}>
                <div className="burgerTrigger" onClick={() => {handleCloseMenu();}}></div>
                <div className="burgerMenu"></div>
            </div>
            <div className={closeMenu === false ? "profileContainer": "profileContainer active"}>
                <img src={Profile} alt="profile" className="profile" />
                <div className="profileContents">
                    <p className="name">Hello, John👋</p>
                    <p>johnsmith@gmail.com</p>
                </div>
            </div>
            <div className={closeMenu === false ? "contentsContainer": "contentsContainer active"}>
                <ul>
                    <li className={location.pathname === "/" ? "active" : ""}>
                        <img src={Dashboard} alt="dashboard" />
                        <a href="/">dashboard</a>
                    </li>
                    <li className={location.pathname === "/uielements" ? "active": "" }>
                        <img src={Transactions} alt="Uielements" />
                        <a href="/uielements">Ui elements</a>
                    </li>
                    <li className={location.pathname === "/formelements" ? "active" : ""}>
                            <img src={Performance} alt="Formelements" />
                            <a href="/formelements">Formelements</a>
                    </li>
                    <li className={ location.pathname === "/documents" ? "active" : "" }>
                        <img src={News} alt="Documents" />
                        <a href="/documents">Documents</a>
                    </li>
                    <li className={ location.pathname === "/tables" ? "active" : ""}>
                        <img src={Settings} alt="Tables" />
                        <a href="/tables">Tables</a>
                    </li>
                    <li className={ location.pathname === "/charts" ? "active" : ""}>
                        <img src={Support} alt="Charts" />
                        <a href="/charts">Charts</a>
                    </li>
                    <li className={ location.pathname === "/userpages" ? "active" : ""}>
                        <img src={Support} alt="Userpages" />
                        <a href="/userpages">Userpages</a>
                    </li>
                    <li className={ location.pathname === "/errorspages" ? "active" : ""}>
                        <img src={Support} alt="Errorpages" />
                        <a href="/errorpages">Errorpages</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;











// import React, { children, useState } from 'react';
// import {
//     FaTh,
//     FaBars,
//     FaUserAlt,
//     FaRegChartBar,
//     FaCommentAlt,
//     FaShoppingBag,
//     FaThList
// } from "react-icons/fa";
// import { NavLink } from 'react-router-dom';

// const Sidebar = ({children}) =>{
//     const [isOpen, setIsOpen] = useState(false);
//     const toggle = ()=>  setIsOpen(!isOpen)
//     const menuItem=[
//         {
//             path:"/",
//             name:"Dashboard",
//             icon:<FaTh/>,
//         },
//         {
//             path:"/about",
//             name:"UI elements",
//             icon:<FaUserAlt/>,
//         },
//         {
//             path:"/analytics",
//             name:"Form elements",
//             icon:<FaRegChartBar/>,
//         },
//         {
//             path:"/comment",
//             name:"Icons",
//             icon:<FaCommentAlt/>,
//         },
//         {
//             path:"/product",
//             name:"tables",
//             icon:<FaShoppingBag/>,
//         },
//         {
//             path:"/productlist",
//             name:"charts",
//             icon:<FaThList/>,
//         }
//     ]
//     return(
//         <div className='container-fluid'>
//             <div style={{width:isOpen ? "250px" : "50px"}} className='sidebar'>
//                 <div className="top_section">
//                     <h1 style={{display:isOpen ? "block" : "none"}} className="logo">Logo</h1>
//                     <div style={{marginLeft : isOpen ? "50px" : "0px"}} className="bars">
//                         <FaBars onClick={toggle}/>
//                     </div>
//                 </div>
//                 {
//                     menuItem.map((item, index)=>(
//                         <NavLink to={item.path} key={index} className="link"activeclassName="active">
//                             <div className="icon">{item.icon}</div>
//                             <div style={{display:isOpen ? "block" : "none"}} className='link_text'>{item.name}</div>
//                         </NavLink>
//                     ))
//                 }
//             </div>
//         <main>{children}</main>    
//         </div>
//     )
// }
// export default Sidebar;