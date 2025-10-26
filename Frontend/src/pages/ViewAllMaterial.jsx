import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

export default function ViewAllmaterials() {
  const location = useLocation();
  const user_id = location.state;
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [material, setMaterial] = useState([]);

  useEffect(() => {
    if (user_id) {
      setLoading(true);

      axios
        .get(`http://localhost:5000/staff/fetchAllMaterials/${user_id}`)
        .then((res) => {
          setMaterial(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setError("Failed to fetch Materials.");
          setLoading(false);
        });
    }
  }, [user_id]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the material!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/staff/deleteMaterialById/${id}`)
          .then(() => {
            setMaterial((prev) => prev.filter((m) => m.material_id !== id));
            Swal.fire(
              "Deleted!",
              "Material has been deleted successfully ✅",
              "success"
            );
          })
          .catch(() => {
            Swal.fire("Error!", "Failed to delete the material.", "error");
          });
      }
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
          <h5>Recently Created Material</h5>

          <div className="row mt-4 align-items-center">
            <div className="offset-col-md-1 col-md-10 mx-auto text-start">
              {loading && (
                <p className="text-center text-primary">
                  Loading your materials...
                </p>
              )}
              {error && <p className="text-danger">{error}</p>}
              {!loading && !error && material.length === 0 ? (
                <p className="text-center text-danger mt-5 fs-5">
                  No Material found for {user_id}
                </p>
              ) : (
                <ul
                  className="mt-3 overflow-auto"
                  style={{ listStyleType: "none", maxHeight: "65vh" }}
                >
                  <li className="p-3 sticky-top">
                    <div className="row">
                      <div
                        className="col-md-2 p-2  text-center  border border-white"
                        style={{
                          fontWeight: 600,
                          fontSize: "18px",
                          color: "#ffff",
                          backgroundColor: "#303030",
                        }}
                      >
                        Date
                      </div>
                      <div
                        className="col-md-6  p-2  text-center  border border-white"
                        style={{
                          fontWeight: 600,
                          fontSize: "18px",
                          color: "#ffff",
                          backgroundColor: "#303030",
                        }}
                      >
                        Material Title
                      </div>
                      <div
                        className="col-md-3 p-2  text-center  border border-white"
                        style={{
                          fontWeight: 600,
                          fontSize: "18px",
                          color: "#ffff",
                          backgroundColor: "#303030",
                        }}
                      >
                        Operations
                      </div>
                    </div>
                  </li>
                  {material.map((e) => (
                    <li className="p-3" key={e.material_id}>
                      <div className="row">
                        <div
                          className="col-md-2 p-2 bg-black bg-opacity-25 border border-black"
                          style={{ fontSize: 18 }}
                        >
                          {new Date(e.created_at).toLocaleDateString("en-GB")}
                        </div>
                        <div
                          className="col-md-6 p-2 bg-black bg-opacity-25 border border-black"
                          style={{ color: "#78091E", fontSize: 18 }}
                        >
                          {e.material_title}
                        </div>
                        <div className="col-md-3 p-2 bg-black bg-opacity-25 border border-black">
                          <button
                            className="btn btn-sm btn-primary rounded-5 me-3"
                            style={{ width: 70, fontSize: 13 }}
                          >
                            <Link
                              style={{
                                textDecoration: "none",
                                color: "#ffffff",
                              }}
                              to="/materialEditPage"
                              state={{ materialID: e.material_id }}
                            >
                              Edit
                            </Link>
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
