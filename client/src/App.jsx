import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Department from "./pages/Department";
import Stuff from "./pages/Stuff";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import User from "./pages/User";
import PrivateUser from "./components/PrivateUser.jsx";

export default function App() {
  return (
    <BrowserRouter>
      {/* header component */}
      <Header></Header>
      <Routes>

        // Public route
        <Route path="/" element={<Home />} />
        
        // Private user route
        <Route element={<PrivateUser />}>
          <Route path="/user" element={<User />} />
        </Route>

        // login route
        <Route path="/login" element={<Login />} />

        // signup route
        <Route path="/signup" element={<Signup />} />

        // about route
        <Route path="/about" element={<About />} />

        // department route
        <Route path="/department" element={<Department />} />

        //stuff route
        <Route path="/Stuff" element={<Stuff />} />

        // contact route
        <Route path="/Contact" element={<Contact />} />

        // private profile route
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
