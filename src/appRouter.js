
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
import { Route, Routes} from 'react-router-dom';
import { Login } from './components/login.component';
import Sidebar from './components/sidebar';
import  Dashboard from './components/dashboard.component'
import About from './components/about';
import Comment from './components/comment';
import Product from './components/product';
import ProductList from './components/productlist';
import Analytics from './components/analytics';

export function AppRouter(){
    return(
        <Sidebar>
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
            <Route path='/' element={<Dashboard></Dashboard>}></Route>
            <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/comment' element={<Comment></Comment>}></Route>
            <Route path='/product' element={<Product></Product>}></Route>
            <Route path='/productlist' element={<ProductList></ProductList>}></Route>
            <Route path='/analytics' element={<Analytics></Analytics>}></Route>
        </Routes>
        </Sidebar>
    )
}
