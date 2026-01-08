import "./App.css";
import Login from "./pages/Login";
import Searchpage from "./pages/SearchPage";
import Courseform from "./pages/CourseFormPage";
import CourseEdit from "./pages/CourseEditPage";
import MaterialForm from "./pages/MaterialFormPage";
import MaterialEdit from "./pages/MaterialEditPage";
import Resultpage from "./pages/ResultPage";
import ViewCourse from "./pages/ViewCoursePage";
import ViewMaterial from "./pages/ViewMaterialPage";
import CoursePage from "./pages/CoursePage";
import ErrorPage from "./pages/ErrorPage";
import StaffDashboard from "./pages/staffDashboard";
import ViewAllMaterials from "./pages/ViewAllMaterial";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Student & staff accessible pages */}
        <Route
          path="/searchPage"
          element={
            <ProtectedRoute
              allowedRoles={["student", "assistant_professor", "coordinator"]}
            >
              <Searchpage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/coursePage"
          element={
            <ProtectedRoute
              allowedRoles={["student", "assistant_professor", "coordinator"]}
            >
              <CoursePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/resultPage"
          element={
            <ProtectedRoute
              allowedRoles={["student", "assistant_professor", "coordinator"]}
            >
              <Resultpage />
            </ProtectedRoute>
          }
        />

        {/* Staff only pages */}
        <Route
          path="/staffDashboardPage"
          element={
            <ProtectedRoute
              allowedRoles={["assistant_professor", "coordinator"]}
            >
              <StaffDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/viewcoursePage"
          element={
            <ProtectedRoute
              allowedRoles={["assistant_professor", "coordinator"]}
            >
              <ViewCourse />
            </ProtectedRoute>
          }
        />
        <Route
          path="/viewmaterialPage"
          element={
            <ProtectedRoute
              allowedRoles={["assistant_professor", "coordinator"]}
            >
              <ViewMaterial />
            </ProtectedRoute>
          }
        />
        <Route
          path="/viewAllMaterialsPage"
          element={
            <ProtectedRoute
              allowedRoles={["assistant_professor", "coordinator"]}
            >
              <ViewAllMaterials />
            </ProtectedRoute>
          }
        />
        <Route
          path="/materialformPage"
          element={
            <ProtectedRoute
              allowedRoles={["assistant_professor", "coordinator"]}
            >
              <MaterialForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/materialEditPage"
          element={
            <ProtectedRoute
              allowedRoles={["assistant_professor", "coordinator"]}
            >
              <MaterialEdit />
            </ProtectedRoute>
          }
        />
        <Route
          path="/courseformPage"
          element={
            <ProtectedRoute
              allowedRoles={["assistant_professor", "coordinator"]}
            >
              <Courseform />
            </ProtectedRoute>
          }
        />
        <Route
          path="/courseEditPage"
          element={
            <ProtectedRoute
              allowedRoles={["assistant_professor", "coordinator"]}
            >
              <CourseEdit />
            </ProtectedRoute>
          }
        />

        {/* Default route: redirect to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Catch all */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
