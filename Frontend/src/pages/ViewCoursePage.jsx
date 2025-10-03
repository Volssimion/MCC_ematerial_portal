import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ViewCourse() {
  const user_id = 2401722037046;
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user_id) {
      setLoading(true);

      axios
        .get(`http://localhost:5000/staff/getAllcourses/${user_id}`)
        .then((res) => {
          setCourse(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setError("Failed to fetch courses.");
          setLoading(false);
        });
    }
  }, [user_id]);

  return (
    <div>
      <Navbar />
      <div className="custom-container">
        <div
          className="card vh-100 m-3 p-4 rounded-4  "
          style={{ backgroundColor: "#D2EAC6" }}
        >
          <h5>Your Course</h5>
          <div className="row mt-4 align-items-center">
            <div className="offset-col-md-1 col-md-10 mx-auto text-start ">
              {loading && (
                <p className="text-center text-primary">
                  Loading your courses...
                </p>
              )}
              {error && <p className="text-danger">{error}</p>}
              {!loading && !error && course.length === 0 && (
                <p className="text-center text-danger mt-5  fs-5">
                  {`no courses found for ${user_id}`}
                </p>
              )}
              <ul
                className="mt-3 overflow-auto "
                style={{ listStyleType: "none", maxHeight: "65vh" }}
              >
                {course.map((c) => {
                  const materialDetails = {
                    userID: c.user_id,
                    courseID: c.course_id,
                    programID: c.program_id,
                  };
                  return (
                    <li className="p-3" key={c.course_id}>
                      <div className="row ">
                        <div className="col-md-2 p-2  bg-black bg-opacity-25 border border-black">
                          {new Date(c.created_at).toLocaleDateString("en-GB")}
                        </div>
                        <div
                          className="col-md-6 p-2 bg-black bg-opacity-25 border border-black"
                          style={{ color: "#78091E" }}
                        >
                          {c.course_title} ({c.course_id})
                        </div>
                        <div className="col-md-4 p-2 bg-black bg-opacity-25 border border-black">
                          <button
                            className="btn btn-sm me-3  btn-success rounded-5"
                            style={{ width: 70, fontSize: 13 }}
                          >
                            <Link
                              style={{
                                textDecoration: "none",
                                color: "#ffffff",
                              }}
                              to="/materialformPage"
                              state={materialDetails}
                            >
                              Add
                            </Link>
                          </button>
                          <button
                            className="btn btn-sm  btn-primary rounded-5 me-3"
                            style={{ width: 70, fontSize: 13 }}
                          >
                            <Link
                              style={{
                                textDecoration: "none",
                                color: "#ffffff",
                              }}
                              to="/courseEditPage"
                              state={materialDetails}
                            >
                              Edit
                            </Link>
                          </button>
                          <button
                            className="btn btn-sm btn-danger rounded-5"
                            style={{ width: 70, fontSize: 13 }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
