
import './App.css';
// import { AppRouter } from './appRouter';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../src/styles/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Documents from "./pages/documents";
import Uielements from "./pages/uielements";
import Formelements from "./pages/formelements";
import Charts from "./pages/charts";
import Tables from "./pages/tables";
import Icons from "./pages/icons";
import Userpages from "./pages/userpages";
import Errorpages from "./pages/errorpages";
import Sidebar from "./components/sidebar";

function App() {
    return (
        <Router>
            <div className="App">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/documents" element={<Documents />} />
                    <Route path="/uielements" element={<Uielements />} />
                    <Route path="/formelements" element={<Formelements />} />
                    <Route path="/charts" element={<Charts />} />
                    <Route path="/tables" element={<Tables />} />
                    <Route path="/icons" element={<Icons/>}/>
                    <Route path="/users" element={<Userpages />} />
                    <Route path="/error" element={<Errorpages />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;




// //import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter } from 'react-router-dom';
// import {AppRouter } from './appRouter';
// //import {Dashboard } from './components/dashboard.component';
// function App() {
//   return (
//     <BrowserRouter>
//     {/* <Dashboard></Dashboard> */}
//     <AppRouter></AppRouter>
//     </BrowserRouter>
//   );
// }

// export default App;
