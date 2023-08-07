import Login from "./pages/Login.js";
// import Signup from "./pages/Signup.js";
// import Dashboard from "./pages/Dashboard.js";
// import Employee from "./pages/Employee.js";
// import Notification from "./pages/Notification.js";
import {Routes, Route, BrowserRouter} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                {/*<Route path="/signup" element={<Signup/>}/>*/}
                {/*<Route path="/dashboard" element={<Dashboard/>}/>*/}
                {/*<Route path="/employee" element={<Employee/>}/>*/}
                {/*<Route path="/notification" element={<Notification/>}/>*/}
            </Routes>
        </BrowserRouter>
    );
}

export default App;

