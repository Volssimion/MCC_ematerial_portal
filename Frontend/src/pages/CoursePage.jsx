import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CoursePage() {
  const location = useLocation();
  const { program_id, year, sem, batch } = location.state || {};
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (program_id && year && sem && batch) {
      setLoading(true);

      axios
        .get("http://localhost:5000/user/getcourse", {
          params: {
            program_id,
            year,
            sem,
            batch,
          },
        })
        .then((res) => {
          setCourse(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setError("Failed to fetch courses.");
          setLoading(false);
        });
    }
  }, [program_id, year, sem, batch]);

  return (
    <div>
      <Navbar />
      <div className="custom-container">
        <div
          className="card vh-100 m-3 p-4 rounded-4  "
          style={{ backgroundColor: "#D2EAC6" }}
        >
          <h2>Course</h2>
          <div className="row mt-2 align-items-center">
            <div className="offset-col-md-2 col-md-8 mx-auto text-start ">
              {loading && (
                <p className="text-center text-primary">Loading courses...</p>
              )}
              {error && <p className="text-danger">{error}</p>}
              {!loading && !error && course.length === 0 && (
                <p className="text-center text-danger mt-5  fs-5">
                  No courses found for the selected criteria.
                </p>
              )}
              <ul className="mt-3 overflow-auto " style={{ maxHeight: "65vh" }}>
                {course.map((c) => {
                  const courseDetails = {
                    courseID: c.course_id,
                    courseTitle: c.course_title,
                  };

                  return (
                    <li
                      className="fs-5 p-2 mb-3"
                      style={{ color: "#78091E", cursor: "pointer" }}
                      key={c.course_id}
                    >
                      <Link
                        style={{ textDecoration: "none", color: "#78091E" }}
                        to="/resultPage"
                        state={courseDetails}
                      >
                        {c.course_title} ({c.course_id})
                      </Link>
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
