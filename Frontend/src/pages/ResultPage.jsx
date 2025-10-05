import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Resultpage() {
  const location = useLocation();
  const { courseID, courseTitle } = location.state;
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (courseID && courseTitle) {
      setLoading(true);

      axios
        .get(`http://localhost:5000/student/getmaterials/${courseID}`)
        .then((res) => {
          const data = Array.isArray(res.data) ? res.data : [res.data];

          const updatedData = data.map((m) => {
            if (m.material_doc) {
              m.material_doc = `http://localhost:5000/uploads/${m.material_doc}`;
            }
            return m;
          });

          setMaterials(updatedData);
          setLoading(false);
        })
        .catch((err) => {
          setError("Failed to fetch courses.");
          setLoading(false);
        });
    }
  }, [courseID, courseTitle]);

  return (
    <div>
      <Navbar />
      <div className="custom-container">
        <div
          className="card vh-100 m-3 p-4 rounded-4  "
          style={{ backgroundColor: "#D2EAC6" }}
        >
          <h5>Materials</h5>
          <div className="row mt-4 align-items-center">
            <div className="offset-col-md-1 col-md-10 mx-auto text-start ">
              <h5 className="fs-6 fs-md-1 " style={{ color: "#78091E" }}>
                {courseTitle} ({courseID})
              </h5>
              {loading && (
                <p className="text-center text-primary">Loading materials...</p>
              )}
              {error && <p className="text-danger">{error}</p>}
              {!loading && !error && materials.length === 0 && (
                <p className="text-center text-danger mt-5  fs-5">
                  No Materials found for the selected Course.
                </p>
              )}
              <ul
                className="mt-3 overflow-auto "
                style={{ listStyleType: "none", maxHeight: "65vh" }}
              >
                {materials.map((m) => (
                  <li className="p-3" key={m.material_id}>
                    <div className="row">
                      <div className="col-md-2 p-2 bg-black bg-opacity-25 border border-black">
                        {m.material_type}
                      </div>
                      <div
                        className="col-md-5 p-2 bg-black bg-opacity-25 border border-black"
                        style={{ color: "#78091E" }}
                      >
                        {m.material_title}
                      </div>
                      <div className="col-md-3 p-2 bg-black bg-opacity-25 border border-black">
                        {m.material_type === "link" ? (
                          <button
                            className="btn btn-sm btn-primary rounded-5 me-3"
                            style={{ width: 70, fontSize: 13 }}
                            onClick={() =>
                              window.open(
                                m.material_url,
                                "_blank",
                                "noopener,noreferrer"
                              )
                            }
                          >
                            Visit
                          </button>
                        ) : (
                          <>
                            <a
                              href={m.material_doc}
                              target="_blank"
                              rel="noopener noreferrer"
                              download
                              className="btn btn-sm btn-danger rounded-5"
                              style={{ fontSize: 13 }}
                            >
                              Download
                            </a>
                          </>
                        )}
                      </div>
                      <div className="col-md-2 p-2 bg-black bg-opacity-25 border border-black">
                        {new Date(m.created_at).toLocaleDateString("en-GB")}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
