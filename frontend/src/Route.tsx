import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from './pages/Login.tsx'
import Dashboard from './pages/Dashboard.tsx'
import Evaluation from './pages/Evaluation.tsx'
import Policy from './pages/Policy.tsx'
import UserManagement from './pages/UserManagement.tsx'
import AdminManagement from './pages/AdminManagement.tsx'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/dashboard",
      element: <Dashboard />
    },
    {
      path: "/evaluation",
      element: <Evaluation />
    },
    {
      path: "/policy",
      element: <Policy />
    },
    {
      path: "/user",
      element: <UserManagement />
    },
    {
      path: "/admin",
      element: <AdminManagement />
    },
  ])

export default router