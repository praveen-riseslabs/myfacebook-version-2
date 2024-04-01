import { Route,Routes } from 'react-router-dom';
import { Dashboard } from './components/Pages/dashboard/dashboard.jsx';
import { Documents } from './components/Pages/documents/documents.jsx';
import { Reports } from './components/Pages/reports/reports.jsx';
import {Tables} from './components/Pages/tables/tables.jsx';
import {Charts} from './components/Pages/charts/charts.jsx';
import {Icons} from './components/Pages/icons/icons.jsx';
import {Userpages} from './components/Pages/userpages/userpages.jsx';

export function HomeRouter(){
    return(
    

        <Routes>
            <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
            <Route path='/documents'element={<Documents></Documents>}></Route>
            <Route path='/reports' element={<Reports></Reports>}></Route>
            <Route path='/tables' element={<Tables></Tables>}></Route>
            <Route path='/charts' element={<Charts></Charts>}></Route>
            <Route path='/icons'element={<Icons></Icons>}></Route>
            <Route path='/userpages' element={<Userpages></Userpages>}></Route>
            </Routes>
       
    )
}
