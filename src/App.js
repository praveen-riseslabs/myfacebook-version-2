
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';
// import {AppRouter } from './appRouter';
// import {Dashboard } from './components/dashboard.component';
// import { Login } from './components/login.component';
// import { Signup } from './components/registrationpage/signup';
import { Home } from './components/Home/home';
// import { Registration} from './components/registrationpage/signup';


function App() {
  return (
    <BrowserRouter>
    {/* <Signup></Signup> */}
    <Home></Home>
    
    {/* <AppRouter></AppRouter> */}
    </BrowserRouter>
  );
}

export default App;
