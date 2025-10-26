import Navbar from "../components/Navbar";
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import Swal from "sweetalert2";

export default function MaterialForm() {
  const location = useLocation();
  const { userID, courseID } = location.state;
  const navigate = useNavigate();

  const [materialTitle, setMaterialTitle] = useState("");
  const [materialType, setMaterialType] = useState("");
  const [materialLink, setMaterialLink] = useState("");
  const [materialFile, setMaterialFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !materialTitle ||
      !materialType ||
      (materialType === "doc" && !materialFile) ||
      (materialType === "link" && !materialLink)
    ) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Form",
        text: "⚠️ Please fill all required fields before submitting.",
        timer: 2000,
        showConfirmButton: false,
      });
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

      Swal.fire({
        icon: "success",
        title: "Upload Successful!",
        text: "Your material has been uploaded successfully.",
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => navigate(-1), 2000);
      // Reset form
      setMaterialTitle("");
      setMaterialType("");
      setMaterialLink("");
      setMaterialFile(null);
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Upload Failed",
        text: "Something went wrong while uploading the material.",
        showConfirmButton: true,
        confirmButtonColor: "#d33",
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
          <h5>Material Form</h5>
          <form onSubmit={handleSubmit}>
            <div className="row mt-4 align-items-center">
              <div className="col-md-offset-3 col-md-6 mx-auto">
                <div className="mb-3">
                  <label className="form-label">Course ID</label>
                  <input
                    type="text"
                    className="form-control bg-black bg-opacity-25 text-black rounded-4"
                    value={courseID}
                    readOnly
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Material Title</label>
                  <input
                    type="text"
                    className="form-control bg-black bg-opacity-25 text-black rounded-4"
                    value={materialTitle}
                    placeholder="Ex: Unit-1 Notes"
                    onChange={(e) => setMaterialTitle(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Material Type</label>
                  <select
                    className="form-select bg-black bg-opacity-25 text-black rounded-4"
                    value={materialType}
                    onChange={(e) => setMaterialType(e.target.value)}
                  >
                    <option value="">Open the select Menu</option>
                    <option value="link">Link</option>
                    <option value="doc">Doc</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Material Link</label>
                  <input
                    type="text"
                    className="form-control bg-black bg-opacity-25 text-black rounded-4"
                    placeholder="Paste link here"
                    value={materialLink}
                    onChange={(e) => setMaterialLink(e.target.value)}
                    disabled={materialType === "doc"}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Material Document</label>
                  <input
                    type="file"
                    className="form-control bg-black bg-opacity-25 text-black rounded-4"
                    onChange={(e) => {
                      const file = e.target.files[0]; // single file only
                      if (file && file.size > 10 * 1024 * 1024) {
                        Swal.fire({
                          icon: "warning",
                          title: "File Too Large",
                          text: "File size exceeds 10MB limit. Please choose a smaller file.",
                          timer: 2500,
                          showConfirmButton: false,
                        });
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
