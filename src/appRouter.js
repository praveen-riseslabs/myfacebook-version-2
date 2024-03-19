<<<<<<< HEAD

import { Route,Routes } from 'react-router-dom';
import { Forgotpassword } from './components/forgotpass.component';
import { Resetpassword } from './components/resetpass.component';

export function AppRouter(){
    return(
        <Routes>
            <Route path="/forgotpass" element={<Forgotpassword></Forgotpassword>}></Route>
            <Route path="/resetpass" element={<Resetpassword></Resetpassword>}></Route> 
        </Routes>
    )
}




=======
import { Route, Routes } from "react-router-dom";
import {Dashboard} from './components/Pages/dashboard/dashboard.jsx';
import {Navbar} from './components/Navbar/navbar.jsx';

export function Approuter(){
    return(
        <Routes>
            <Route path="/" element={<Dashboard></Dashboard>} ></Route>
        </Routes>
    )
}
>>>>>>> 58be2cb (added files)
