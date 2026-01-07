import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Discover from "./pages/Discover";
import Matches from "./pages/Matches";
import ProtectedRoute from "./auth/ProtectedRoute";
import Entry from "./pages/Entry";
import Dashboard from "./pages/Dashboard";
import AuthSuccess from "./auth/AuthSuccess";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/auth/success' element={<AuthSuccess />} />
        <Route path="/" element={<Entry />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<Dashboard />}>
            <Route path="/discover" element={<Discover />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
