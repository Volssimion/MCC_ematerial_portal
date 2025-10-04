import Navbar from "../components/Navbar";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import uuid from "react-uuid";

export default function MaterialForm() {
  const location = useLocation();
  const { userID, courseID } = location.state;

  // States
  const [materialTitle, setMaterialTitle] = useState("");
  const [materialType, setMaterialType] = useState("");
  const [materialLink, setMaterialLink] = useState("");
  const [materialFile, setMaterialFile] = useState(null);
  const [error, setError] = useState("");

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !materialTitle ||
      !materialType ||
      (materialType === "doc" && !materialFile) ||
      (materialType === "link" && !materialLink)
    ) {
      setError("⚠️ Please fill all required fields.");
      return;
    }

    // Prepare FormData
    const formData = new FormData();
    formData.append("material_id", uuid());
    formData.append("material_title", materialTitle);
    formData.append("user_id", userID);
    formData.append("course_id", courseID);
    formData.append("material_type", materialType);

    if (materialType === "doc") formData.append("material_doc", materialFile);
    if (materialType === "link") formData.append("material_url", materialLink);

    try {
      await axios.post("http://localhost:5000/staff/uploadMaterial", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Material uploaded successfully!");
      // Reset form
      setMaterialTitle("");
      setMaterialType("");
      setMaterialLink("");
      setMaterialFile(null);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to upload material.");
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
          <h5>Material Form</h5>
          {error && (
            <div className="alert alert-danger text-center">{error}</div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="row mt-4 align-items-center">
              <div className="col-md-offset-3 col-md-6 mx-auto">
                {/* Course ID */}
                <div className="mb-3">
                  <label className="form-label">Course ID</label>
                  <input
                    type="text"
                    className="form-control bg-black bg-opacity-25 text-black rounded-4 "
                    value={courseID}
                    readOnly
                  />
                </div>

                {/* Material Title */}
                <div className="mb-3">
                  <label className="form-label">Material Title</label>
                  <input
                    type="text"
                    className="form-control bg-black bg-opacity-25 text-black rounded-4 "
                    value={materialTitle}
                    onChange={(e) => setMaterialTitle(e.target.value)}
                  />
                </div>

                {/* Material Type */}
                <div className="mb-3">
                  <label className="form-label">Material Type</label>
                  <select
                    className="form-select"
                    value={materialType}
                    onChange={(e) => setMaterialType(e.target.value)}
                  >
                    <option value="">Select Type</option>
                    <option value="link">Link</option>
                    <option value="doc">Doc</option>
                  </select>
                </div>

                {/* Material Link */}
                <div className="mb-3">
                  <label className="form-label">Material Link</label>
                  <input
                    type="text"
                    className="form-control bg-black bg-opacity-25 text-black rounded-4 "
                    placeholder="Paste link here"
                    value={materialLink}
                    onChange={(e) => setMaterialLink(e.target.value)}
                    disabled={materialType === "doc"}
                  />
                </div>

                {/* Material File */}
                <div className="mb-3">
                  <label className="form-label">Material Document</label>
                  <input
                    type="file"
                    className="form-control bg-black bg-opacity-25 text-black rounded-4 "
                    onChange={(e) => {
                      const file = e.target.files[0]; // single file only
                      if (file && file.size > 10 * 1024 * 1024) {
                        alert("File size exceeds 10MB limit");
                        e.target.value = "";
                        return;
                      }
                      setMaterialFile(file);
                    }}
                    disabled={materialType === "link"}
                  />
                  <span className="form-text">
                    Pdf/Word/Ppt under 10MB, only one file allowed
                  </span>
                </div>

                {/* Submit Button */}
                <div className="mb-3 text-center">
                  <button type="submit" className="btn btn-danger rounded-3">
                    Submit
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
