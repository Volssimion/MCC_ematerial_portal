import Navbar from "../components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import uuid from "react-uuid";
import { useLocation } from "react-router-dom";

export default function MaterialForm() {
  const location = useLocation();
  const { userID, courseID, programID } = location.state;

  const [error, setError] = useState("");
  const [materialData, setMaterialData] = useState({
    material_id: uuid(),
    material_title: "",
    user_id: userID,
    program_id: programID,
    course_id: courseID,
    material_type: "",
    material_doc: "",
    material_url: "",
  });
  console.log(userID, programID, courseID);

  const handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setMaterialData((currentData) => {
      return { ...currentData, [name]: value };
    });
  };

  const timeout = () => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 1000);
      return () => clearTimeout(timer);
    }
  };

  useEffect(timeout, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userID, courseID, programID);
    const {
      material_id,
      material_title,
      user_id,
      program_id,
      course_id,
      material_type,
      material_doc,
      material_url,
    } = materialData;

    if (
      !material_id ||
      !material_title ||
      !user_id ||
      !program_id ||
      !course_id ||
      !material_type ||
      !material_doc ||
      !material_url
    ) {
      setError("⚠️ Please select all fields before Submitting.");
      return;
    }
    axios
      .post("http://localhost:5000/staff/createMaterial", materialData)
      .then((res) => {
        console.log("Material Created:", res.data);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to create Material.");
      });
  };

  return (
    <div>
      <Navbar />
      <div className="custom-container">
        <div
          className="card vh-100 m-3 p-4 rounded-4  "
          style={{ backgroundColor: "#D2EAC6" }}
        >
          <h5>Material Form</h5>
          {error && (
            <div className="alert alert-danger text-center" role="alert">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="row mt-4 align-items-center">
              <div className=" col-md-offset-3 col-md-6 mx-auto">
                <div className="mb-3">
                  <label htmlFor="courseID" className="form-label">
                    Course ID
                  </label>
                  <input
                    type="text"
                    id="courseID"
                    className="form-control bg-black bg-opacity-25 text-black rounded-4 "
                    aria-describedby="courseID"
                    placeholder="RDMS1234"
                    value={courseID}
                    name="course_id"
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="materialTitle" className="form-label">
                    Enter the Material Title
                  </label>
                  <input
                    type="text"
                    id="materialTitle"
                    className="form-control bg-black bg-opacity-25 text-black rounded-4 "
                    aria-describedby="materialTitle"
                    placeholder="Ex Unit-1 Notes"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="materialType" className="form-label">
                    Select the Material Type
                  </label>
                  <select
                    id="materialType"
                    className="form-select custom-select bg-black bg-opacity-25 rounded-4"
                    aria-label="Default select example"
                  >
                    <option value="">Open the select Menu</option>
                    <option value="link">Link</option>
                    <option value="doc">Doc</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="materialLink" className="form-label">
                    Material Link
                  </label>
                  <input
                    type="text"
                    id="materialLink"
                    className="form-control bg-black bg-opacity-25 text-black rounded-4 "
                    aria-describedby="materialLink"
                    placeholder="Url"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="materialDoc" className="form-label">
                    Material Document
                  </label>
                  <input
                    type="file"
                    id="materialDoc"
                    className="form-control bg-black bg-opacity-25 text-black rounded-4 "
                    aria-describedby="materialDocumentBlock"
                    placeholder="Pdf/Ppt"
                  />
                  <span id="materialDocumentBlock" className="form-text">
                    Size : Pdf Or Ppt should under 1mb and attach only 1
                    Document.
                  </span>
                </div>
                <div className="mb-3 text-center">
                  <button
                    type="submit"
                    className="btn btn-danger rounded-3 pt-1"
                  >
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
