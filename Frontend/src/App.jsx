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
import Staff from "./pages/StaffPage";
import ErrorPage from "./pages/ErrorPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/searchPage" element={<Searchpage />} />
          <Route path="/coursePage" element={<CoursePage />} />
          <Route path="/resultPage" element={<Resultpage />} />
          <Route path="/staffPage" element={<Staff />} />
          <Route path="/materialformPage" element={<MaterialForm />} />
          <Route path="/materialEditPage" element={<MaterialEdit />} />
          <Route path="/courseformPage" element={<Courseform />} />
          <Route path="/courseEditPage" element={<CourseEdit />} />
          <Route path="/viewmaterialPage" element={<ViewMaterial />} />
          <Route path="/viewcoursePage" element={<ViewCourse />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
