import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import programData from "../utils/programData";
import Swal from "sweetalert2";

export default function Courseform() {
  const [stream, setStream] = useState("");
  const [degree, setDegree] = useState("");
  const [courseData, setCourseData] = useState({
    course_id: "",
    course_title: "",
    user_id: 2401722037046,
    program_id: "",
    year: 0,
    sem: 0,
    batch: "",
  });

  const handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setCourseData((currentData) => {
      const newValue =
        name === "year" || name === "sem" ? parseInt(value, 10) || 0 : value;
      return { ...currentData, [name]: newValue };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { course_id, course_title, program_id, year, sem, batch } =
      courseData;

    if (!course_id || !course_title || !program_id || !year || !sem || !batch) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete form",
        text: "⚠️ Please fill all required fields before submitting.",
        timer: 2000,
        showConfirmButton: false,
      });
      return;
    }
    axios
      .post("http://localhost:5000/staff/createCourse", courseData)
      .then((res) => {
        console.log("Course Created:", res.data);
        console.log(courseData);
        Swal.fire({
          icon: "success",
          title: "Created Successful!",
          text: "Your Course has been Created successfully.",
          showConfirmButton: false,
          timer: 2000,
        });
        setCourseData({
          course_id: "",
          course_title: "",
          user_id: 2401722037046,
          program_id: "",
          year: 0,
          sem: 0,
          batch: "",
        });
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "ERROR",
          text: "Something went wrong while creating the Course.",
          showConfirmButton: true,
          confirmButtonColor: "#d33",
        });
      });
  };

  const selectedData =
    programData[stream] && programData[stream][degree]
      ? programData[stream][degree]
      : null;

  const availablePrograms = selectedData ? selectedData.programs : [];
  const availableYears = selectedData ? selectedData.years : [];
  const availableSemesters =
    selectedData && courseData.year
      ? selectedData.semesters[availableYears[courseData.year - 1]]
      : [];
  const availableBatches = selectedData ? selectedData.batches : [];

  return (
    <div>
      <Navbar />
      <div className="custom-container">
        <div
          className="card m-3 p-4 rounded-4"
          style={{ backgroundColor: "#D2EAC6", minHeight: "100vh" }}
        >
          <h5>Course Form</h5>
          <form onSubmit={handleSubmit}>
            <div className="row mt-4 align-items-center">
              <div className="col-md-offset-3 col-md-6 mx-auto">
                <div className="mb-2">
                  <label className="form-label">Select the Stream</label>
                  <div>
                    <input
                      className="form-check-input bg-black bg-opacity-25"
                      type="radio"
                      name="stream"
                      id="Regular"
                      value="Regular"
                      onChange={() => {
                        setStream("Regular");
                        setDegree("");
                        setCourseData({
                          course_id: "",
                          course_title: "",
                          user_id: 2401722037046,
                          program_id: "",
                          year: 0,
                          sem: 0,
                          batch: "",
                        });
                      }}
                    />
                    <label className="form-label ms-2" htmlFor="Regular">
                      Regular
                    </label>
                    <input
                      className="form-check-input ms-3 bg-black bg-opacity-25"
                      type="radio"
                      name="stream"
                      id="selffiance"
                      value="self-financed"
                      onChange={() => {
                        setStream("self-financed");
                        setDegree("");
                        setCourseData({
                          course_id: "",
                          course_title: "",
                          user_id: 2401722037046,
                          program_id: "",
                          year: 0,
                          sem: 0,
                          batch: "",
                        });
                      }}
                    />
                    <label className="form-label ms-2" htmlFor="selffiance">
                      Self Financed
                    </label>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="Degree" className="form-label">
                    Select the Degree
                  </label>
                  <select
                    id="Degree"
                    className="form-select custom-select bg-black bg-opacity-25 rounded-4"
                    value={degree}
                    onChange={(evt) => setDegree(evt.target.value)}
                    disabled={!stream}
                  >
                    <option value="">Open the select Menu</option>
                    <option value="UG">UG</option>
                    <option value="PG">PG</option>
                    <option value="MPhil">MPhil</option>
                    <option value="Ph.D">Ph.D</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="program" className="form-label">
                    Select the Program
                  </label>
                  <select
                    id="program"
                    className="form-select custom-select bg-black bg-opacity-25 rounded-4"
                    disabled={!stream || !degree}
                    name="program_id"
                    value={courseData.program_id}
                    onChange={handleChange}
                  >
                    <option value="">Open the select Menu</option>
                    {availablePrograms.map((prog) => (
                      <option key={prog.id} value={prog.id}>
                        {prog.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="CourseID" className="form-label">
                    Enter the Course ID
                  </label>
                  <input
                    type="text"
                    id="CourseID"
                    className="form-control bg-black bg-opacity-25 text-black rounded-4"
                    placeholder="Ex RDMS1234"
                    disabled={!stream || !degree}
                    value={courseData.course_id}
                    name="course_id"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="CourseTitle" className="form-label">
                    Enter the Course Title
                  </label>
                  <input
                    type="text"
                    id="CourseTitle"
                    className="form-control bg-black bg-opacity-25 text-black rounded-4"
                    placeholder="Ex RDBMS"
                    disabled={!stream || !degree}
                    value={courseData.course_title}
                    name="course_title"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="year" className="form-label">
                    Select the Year of the Program
                  </label>
                  <select
                    id="year"
                    className="form-select custom-select bg-black bg-opacity-25 rounded-4"
                    name="year"
                    value={courseData.year}
                    onChange={handleChange}
                    disabled={!stream || !degree}
                  >
                    <option value="">Open the select Menu</option>
                    {availableYears.map((yearLabel, index) => (
                      <option key={index} value={yearLabel}>
                        {yearLabel}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="sem" className="form-label">
                    Select the Semester
                  </label>
                  <select
                    id="sem"
                    className="form-select custom-select bg-black bg-opacity-25 rounded-4"
                    name="sem"
                    value={courseData.sem}
                    onChange={handleChange}
                    disabled={!stream || !degree}
                  >
                    <option value="">Open the select Menu</option>
                    {availableSemesters.map((semLabel, index) => (
                      <option key={index} value={semLabel}>
                        {semLabel}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="batch" className="form-label">
                    Select the Batch
                  </label>
                  <select
                    id="batch"
                    className="form-select custom-select bg-black bg-opacity-25 rounded-4"
                    name="batch"
                    value={courseData.batch}
                    onChange={handleChange}
                    disabled={!stream || !degree}
                  >
                    <option value="">Open the select Menu</option>
                    {availableBatches.map((batch, index) => (
                      <option key={index} value={batch}>
                        {batch}
                      </option>
                    ))}
                  </select>
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
