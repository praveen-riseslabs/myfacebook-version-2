
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




