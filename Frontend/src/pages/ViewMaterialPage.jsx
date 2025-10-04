import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

export default function ViewMaterial() {
  const location = useLocation();
  const { courseID, courseTitle } = location.state;
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [material, setMaterial] = useState([]);

  useEffect(() => {
    if (courseID) {
      setLoading(true);

      axios
        .get(`http://localhost:5000/staff/getMaterialById/${courseID}`)
        .then((res) => {
          setMaterial(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setError("Failed to fetch materials.");
          setLoading(false);
        });
    }
  }, [courseID]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/staff/deleteMaterialById/${id}`)
      .then(() => {
        // Remove deleted material from UI
        setMaterial((prev) => prev.filter((m) => m.material_id !== id));

        // Show SweetAlert2 success message
        Swal.fire({
          title: "Deleted!",
          text: "Material has been deleted successfully ✅",
          icon: "success",
          confirmButtonColor: "#3085d6",
          customClass: { popup: "rounded-4 p-3" },
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Error",
          text: "Failed to delete the material.",
          icon: "error",
          confirmButtonColor: "#d33",
          customClass: { popup: "rounded-4 p-3" },
        });
      });
  };

  return (
    <div>
      <Navbar />
      <div className="custom-container">
        <div
          className="card vh-100 m-3 p-4 rounded-4"
          style={{ backgroundColor: "#D2EAC6" }}
        >
          <h5>Your Material</h5>
          <div className="row mt-4 align-items-center">
            <div className="offset-col-md-1 col-md-10 mx-auto text-start">
              <h5 className="fs-6 fs-md-1" style={{ color: "#78091E" }}>
                {courseTitle} ({courseID})
              </h5>
              {loading && (
                <p className="text-center text-primary">
                  Loading your materials...
                </p>
              )}
              {error && <p className="text-danger">{error}</p>}
              {!loading && !error && material.length === 0 && (
                <p className="text-center text-danger mt-5 fs-5">
                  {`No Material found for ${courseID}`}
                </p>
              )}
              <ul
                className="mt-3 overflow-auto"
                style={{ listStyleType: "none", maxHeight: "65vh" }}
              >
                {material.map((e) => (
                  <li className="p-3" key={e.material_id}>
                    <div className="row">
                      <div className="col-md-2 p-2 bg-black bg-opacity-25 border border-black">
                        {new Date(e.created_at).toLocaleDateString("en-GB")}
                      </div>
                      <div
                        className="col-md-6 p-2 bg-black bg-opacity-25 border border-black"
                        style={{ color: "#78091E" }}
                      >
                        {e.material_title}
                      </div>
                      <div className="col-md-3 p-2 bg-black bg-opacity-25 border border-black">
                        <button
                          className="btn btn-sm btn-primary rounded-5 me-3"
                          style={{ width: 70, fontSize: 13 }}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-danger rounded-5"
                          style={{ width: 70, fontSize: 13 }}
                          onClick={() => handleDelete(e.material_id)}
                        >
                          Delete
                        </button>
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
