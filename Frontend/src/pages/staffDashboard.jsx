import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function StaffDashboard() {
  const user_id = 2401722037046;
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user_id) {
      setLoading(true);
      axios
        .get(`http://localhost:5000/user/getuser/${user_id}`)
        .then((res) => setUser(res.data || {}))
        .catch(() => setError("Failed to fetch User."))
        .finally(() => setLoading(false));
    }
  }, [user_id]);

  return (
    <div>
      <Navbar />
      <div className="container-fluid py-4">
        <div
          className="card  p-4 rounded-4 shadow-sm"
          style={{ backgroundColor: "#D2EAC6" }}
        >
          {loading ? (
            <div className="text-center text-primary fs-5 mt-5">
              Loading Staff Details...
            </div>
          ) : error ? (
            <div className="text-danger text-center fs-5 mt-5">{error}</div>
          ) : !user.user_id ? (
            <p className="text-center text-danger mt-5 fs-5">
              No user details found for {user_id}
            </p>
          ) : (
            <>
              <div className="row justify-content-center align-items-center mt-3 mb-3 g-4">
                <div className="col-12 col-md-4 col-lg-2 text-center">
                  <img
                    src={user.user_image}
                    alt={user.user_name}
                    className="rounded-3 img-fluid shadow-sm"
                    style={{
                      width: "180px",
                      height: "180px",
                      objectFit: "cover",
                    }}
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
                        <strong>Department Name:</strong> {user.department_name}
                      </li>
                      <li className="mb-2">
                        <strong>Stream:</strong> {user.program_stream}
                      </li>
                      <li className="mb-2">
                        <strong>Program Name:</strong> {user.program_name}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mt-5">
                <div className="col-12 col-md-8 col-lg-6">
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex justify-content-between align-items-center border rounded-4 p-3 bg-black bg-opacity-25  ">
                      <p className="fs-5 mb-0">
                        <strong>View Courses</strong>
                      </p>
                      <Link
                        to="/viewcoursePage"
                        state={user_id}
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
                        state={user_id}
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
                        state={user_id}
                        className="btn btn-danger rounded-5 btn-sm px-4"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
