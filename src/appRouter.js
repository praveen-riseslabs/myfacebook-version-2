
import { Route,Routes } from 'react-router-dom';
import { Forgotpassword } from './components/forgotpass.component';
import { Resetpassword } from './components/resetpass.component';
import { Signup } from './components/registrationpage/signup';
import { Login } from './components/login.component.jsx';
import {Dashboard} from './components/Pages/dashboard/dashboard.jsx';
import { Documents } from './components/Pages/documents/documents.jsx';
import { Reports } from './components/Pages/reports/reports.jsx';
import {Tables} from './components/Pages/tables/tables.jsx';
import {Charts} from './components/Pages/charts/charts.jsx';
import {Icons} from './components/Pages/icons/icons.jsx';
import {Userpages} from './components/Pages/userpages/userpages.jsx';
import {Errorpages} from './components/Pages/errorpages/errorpages.jsx'

export function AppRouter(){
    return(
        <Routes>
            <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
            <Route path='/documents'element={<Documents></Documents>}></Route>
            <Route path='/reports' element={<Reports></Reports>}></Route>
            <Route path='/tables' element={<Tables></Tables>}></Route>
            <Route path='/charts' element={<Charts></Charts>}></Route>
            <Route path='/icons'element={<Icons></Icons>}></Route>
            <Route path='/userpages' element={<Userpages></Userpages>}></Route>
            <Route path='/errorpages' element={<Errorpages></Errorpages>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path="/forgotpass" element={<Forgotpassword></Forgotpassword>}></Route>
            <Route path="/resetpass" element={<Resetpassword></Resetpassword>}></Route> 
        </Routes>
    )
}
