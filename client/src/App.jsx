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
import Dashboard from "./pages/Dashboard";
import CreatePost from "./pages/CreatePost";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import UpdatePost from "./pages/UpdatePost";
import PostPage from "./pages/PostPage";

export default function App() {
  return (
    <BrowserRouter>
      {/* header component */}
      <Header></Header>
      <Routes>
        // Public route
        <Route path="/" element={<Home />} />
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
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/update-post/:postId" element={<UpdatePost />} />
        </Route>
        <Route path="/post/:postSlug" element={<PostPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
