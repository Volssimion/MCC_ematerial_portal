import Navbar from "../components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function MaterialEditForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const { materialID } = location.state || {};

  const [materialTitle, setMaterialTitle] = useState("");
  const [materialType, setMaterialType] = useState("");
  const [materialLink, setMaterialLink] = useState("");
  const [materialFile, setMaterialFile] = useState(null);
  const [existingFile, setExistingFile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMaterial = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/staff/fetchMaterial/${materialID}`
        );
        const data = res.data;
        setMaterialTitle(data.material_title);
        setMaterialType(data.material_type);
        setMaterialLink(data.material_url || "");
        setExistingFile(data.material_doc || null);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch material details.");
      }
    };

    if (materialID) fetchMaterial();
  }, [materialID]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !materialTitle ||
      !materialType ||
      (materialType === "doc" && !materialFile && !existingFile) ||
      (materialType === "link" && !materialLink)
    ) {
      setError("⚠️ Please fill all required fields.");
      setTimeout(() => setError(""), 2500);
      return;
    }

    const formData = new FormData();
    formData.append("material_title", materialTitle);
    formData.append("material_type", materialType);
    if (materialType === "link") formData.append("material_url", materialLink);
    if (materialType === "doc" && materialFile)
      formData.append("material_doc", materialFile);

    try {
      await axios.put(
        `http://localhost:5000/staff/updateMaterial/${materialID}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      Swal.fire({
        icon: "success",
        title: "Updated!",
        text: "Material updated successfully.",
        showConfirmButton: false,
        timer: 2000,
      });

      setTimeout(() => navigate(-1), 2000); // wait before going back
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Failed to update material.",
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="custom-container">
        <div
          className="card vh-100 m-3 p-4 rounded-4"
          style={{ backgroundColor: "#D2EAC6" }}
        >
          <h5>Edit Material</h5>
          {error && (
            <div className="alert alert-danger text-center">{error}</div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="row mt-4 align-items-center">
              <div className="col-md-offset-3 col-md-6 mx-auto">
                <div className="mb-3">
                  <label className="form-label">Material Title</label>
                  <input
                    type="text"
                    className="form-control bg-black bg-opacity-25 text-black rounded-4"
                    value={materialTitle}
                    onChange={(e) => setMaterialTitle(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Material Type</label>
                  <select
                    className="form-select bg-black bg-opacity-25 text-black rounded-4"
                    value={materialType}
                    onChange={(e) => {
                      setMaterialType(e.target.value);
                      setMaterialLink("");
                      setMaterialFile(null);
                    }}
                  >
                    <option value="">Open the select Menu</option>
                    <option value="link">Link</option>
                    <option value="doc">Doc</option>
                  </select>
                </div>

                {materialType === "link" && (
                  <div className="mb-3">
                    <label className="form-label">Material Link</label>
                    <input
                      type="text"
                      className="form-control bg-black bg-opacity-25 text-black rounded-4"
                      placeholder="Paste link here"
                      value={materialLink}
                      onChange={(e) => setMaterialLink(e.target.value)}
                    />
                  </div>
                )}

                {materialType === "doc" && (
                  <div className="mb-3">
                    <label className="form-label">Material Document</label>
                    <input
                      type="file"
                      className="form-control bg-black bg-opacity-25 text-black rounded-4"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file && file.size > 10 * 1024 * 1024) {
                          Swal.fire({
                            icon: "warning",
                            title: "File too large!",
                            text: "File size must be under 10MB.",
                          });
                          e.target.value = "";
                          return;
                        }
                        setMaterialFile(file);
                      }}
                    />
                    {existingFile && !materialFile && (
                      <p className="mt-2">
                        Current File:{" "}
                        <a href={existingFile} target="_blank" rel="noreferrer">
                          View Document
                        </a>
                      </p>
                    )}
                    <span className="form-text">
                      Pdf/Word/Ppt under 10MB, only one file allowed
                    </span>
                  </div>
                )}

                <div className="mb-3 text-center">
                  <button type="submit" className="btn btn-danger rounded-3">
                    Update Material
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
