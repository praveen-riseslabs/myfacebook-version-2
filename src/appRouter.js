
import { Routes, Route } from 'react-router-dom';
import { Login } from './components/login.component';
import { Resetpassword } from './components/resetpass.component';
import { Forgotpassword } from './components/forgotpass.component';
import { Signup } from './components/registrationpage/signup';
import FileUploader from './components/Awss3Buckets/fileuploader';

export function AppRouter(){
    return(
        <Routes>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/forgotpass' element={<Forgotpassword></Forgotpassword>}></Route>
            <Route path='/resetpass' element={<Resetpassword></Resetpassword>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='/fileuploader' element={<FileUploader></FileUploader>}></Route>
        </Routes>
    )
}
