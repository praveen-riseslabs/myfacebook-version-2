
import { Route,Routes } from 'react-router-dom';
import { Forgotpassword } from './components/forgotpassword/forgotpass.component';
import { Resetpassword } from './components/Resetpassword/resetpass.component.jsx';
import { Signup } from './components/registrationpage/signup';
import { Login } from './components/Login/login.component.jsx';
import {Dashboard} from './components/Pages/dashboard/dashboard.jsx';
import { Documents } from './components/Pages/documents/documents.jsx';
import { Reports } from './components/Pages/reports/reports.jsx';
import {Tables} from './components/Pages/tables/tables.jsx';
import {Charts} from './components/Pages/charts/charts.jsx';
import {Icons} from './components/Pages/icons/icons.jsx';
import {Userpages} from './components/Pages/userpages/userpages.jsx';

import  Home from './components/Home/home.jsx';
import { GetDocuments } from './components/Pages/documents/viewdocuments.jsx';
//import FileUploader from './components/Awss3Buckets/fileuploader';

export function AppRouter(){
    return(
        <Routes>
             
            <Route path='/' element={<Login></Login>}></Route>   
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path="/forgotpass" element={<Forgotpassword></Forgotpassword>}></Route>
            <Route path="/resetpass" element={<Resetpassword></Resetpassword>}></Route> 
            
            <Route path="/home" element={<Home />} >
                <Route  path='dashboard' element={<Dashboard></Dashboard>}></Route>
                <Route path='documents'element={<Documents></Documents>}></Route>
                <Route path='viewdocuments' element={<GetDocuments></GetDocuments>}></Route>
                <Route path='reports' element={<Reports></Reports>}></Route>
                <Route path='tables' element={<Tables></Tables>}></Route>
                <Route path='charts' element={<Charts></Charts>}></Route>
                <Route path='icons'element={<Icons></Icons>}></Route>
                <Route path='userpages' element={<Userpages></Userpages>}></Route>   
            </Route>
        </Routes>
    )
}
