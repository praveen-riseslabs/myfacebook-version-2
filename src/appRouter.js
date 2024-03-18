 import { Route, Routes} from 'react-router-dom';
import { Login } from './components/login.component';


export function AppRouter(){
    return(
        <Routes>
            <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
    )
}