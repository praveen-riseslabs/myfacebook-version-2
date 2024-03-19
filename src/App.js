
import './App.css';
import {BrowserRouter} from 'react-router-dom';
// import { AppRouter } from './appRouter';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//  import Navbar from './components/Navbar/navbar';

 import {AppRouter } from './appRouter';
// import {Dashboard } from './components/dashboard.component';
 import { Login } from './components/login.component';
 import { Signup } from './components/registrationpage/signup';

// import { Registration} from './components/registrationpage/signup';



function App() {
  return (

    <BrowserRouter>
   
      {/* <Signup></Signup>   */}
     {/* <Navbar></Navbar>  */}
    {/* <Sidebar></Sidebar> */}
    <AppRouter>
      
    <Login></Login>
    
    </AppRouter>
     
</BrowserRouter>
  )

}
export default App;