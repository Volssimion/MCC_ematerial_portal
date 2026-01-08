import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function StaffDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user_id = localStorage.getItem("user_id");

    if (!token || !user_id) {
      navigate("/login");
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/user/getuser/${user_id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setUser(res.data);
      } catch (err) {
        console.error("Failed to fetch user:", err);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user_id");
    navigate("/login");
  };

  if (loading) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div>
      <Navbar />
      <div className="container-fluid py-4">
        <div
          className="card p-4 rounded-4 shadow-sm"
          style={{ backgroundColor: "#D2EAC6" }}
        >
          <div className="row justify-content-center align-items-center mt-3 mb-3 g-4">
            <div className="col-12 col-md-4 col-lg-2 text-center">
              <img
                src={
                  user.user_image
                    ? user.user_image.startsWith("http")
                      ? user.user_image
                      : `http://localhost:5000/uploads/${user.user_image}`
                    : "/default.png"
                }
                alt={user.user_name}
                className="rounded-3 img-fluid shadow-sm"
                style={{ width: "180px", height: "180px", objectFit: "cover" }}
              />
            </div>

            <div className="col-12 col-md-8 col-lg-6">
              <div className="card bg-white bg-opacity-25 border-0 p-3 rounded-4">
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <strong>Professor ID:</strong> {user.user_id}
                  </li>
                  <li className="mb-2">
                    <strong>Professor Name:</strong> {user.user_name}
                  </li>
                  <li className="mb-2">
                    <strong>Department:</strong> {user.department_name}
                  </li>
                  <li className="mb-2">
                    <strong>Stream:</strong> {user.program_stream}
                  </li>
                  <li className="mb-2">
                    <strong>Program:</strong> {user.program_name}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="d-flex flex-column gap-3">
                <div className="d-flex justify-content-between align-items-center border rounded-4 p-3 bg-black bg-opacity-25">
                  <p className="fs-5 mb-0">
                    <strong>View Courses</strong>
                  </p>
                  <Link
                    to="/viewcoursePage"
                    state={user.user_id}
                    className="btn btn-primary rounded-5 btn-sm px-4"
                  >
                    View
                  </Link>
                </div>

                <div className="d-flex justify-content-between align-items-center border rounded-4 p-3 bg-black bg-opacity-25">
                  <p className="fs-5 mb-0">
                    <strong>Add Course</strong>
                  </p>
                  <Link
                    to="/courseformPage"
                    state={user.user_id}
                    className="btn btn-success rounded-5 btn-sm px-4"
                  >
                    Add
                  </Link>
                </div>

                <div className="d-flex justify-content-between align-items-center border rounded-4 p-3 bg-black bg-opacity-25">
                  <p className="fs-5 mb-0">
                    <strong>Search Course</strong>
                  </p>
                  <Link
                    to="/searchPage"
                    className="btn btn-primary rounded-5 btn-sm px-4"
                  >
                    Search
                  </Link>
                </div>

                <div className="d-flex justify-content-between align-items-center border rounded-4 p-3 bg-black bg-opacity-25">
                  <p className="fs-5 mb-0">
                    <strong>View Materials</strong>
                  </p>
                  <Link
                    to="/viewAllMaterialsPage"
                    state={user.user_id}
                    className="btn btn-danger rounded-5 btn-sm px-4"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <button className="btn btn-dark" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
