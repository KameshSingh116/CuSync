import ProtectedRoute
from "./ProtectedRoute";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

import Dashboard from "../pages/dashboard/Dashboard";

function AppRoutes() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Navigate to="/login" />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
  path="/dashboard"
  element={
    <ProtectedRoute>

      <Dashboard />

    </ProtectedRoute>
  }
/>

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;