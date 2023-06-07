import Home from "./components/user/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import UserSignUp from "./components/user/UserSignUp";
import UserLogin from "./components/user/UserLogin";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "./components/admin/AdminLogin";
import AdminUserManagement from "./components/admin/AdminUserManagemet";
import UserProfile from "./components/user/UserProfile";
import ProfileEdit from "./components/user/ProfileEdit";
import EditUser from "./components/admin/EditUser";
import IsProtected from "./IsProtected";

function App() {

  return (
  <>
     <Routes>

          <Route path="/signup" element={<UserSignUp />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/edit-profile" element={<ProfileEdit />} />

          {/* Admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/home" element={<AdminUserManagement />} />
          <Route path="/admin/edit-user/:userId" element={<EditUser />} />
      </Routes>
    </>
  )
}

export default App
