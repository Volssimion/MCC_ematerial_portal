import Navbar from "../components/Navbar";

export default function CourseEdit() {
  return (
    <div>
      <Navbar />
      <div className="custom-container">
        <div
          className="card vh-100 m-3 p-4 rounded-4  "
          style={{ backgroundColor: "#D2EAC6" }}
        >
          <h5>Course Edit Form</h5>
          <div className="row mt-4 align-items-center">
            <div className=" col-md-offset-3 col-md-6 mx-auto">
              <div className="mb-3">
                <label htmlFor="courseID" class="form-label">
                  Course ID
                </label>
                <input
                  type="text"
                  id="courseID"
                  className="form-control bg-black bg-opacity-25 text-black rounded-4 "
                  aria-describedby="courseID"
                  placeholder="RDMS1234"
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label htmlFor="programID" class="form-label">
                  Program ID
                </label>
                <input
                  type="text"
                  id="programID"
                  className="form-control bg-black bg-opacity-25 text-black rounded-4 "
                  aria-describedby="programID"
                  placeholder="MCA1234"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="CourseTitle" class="form-label">
                  Course Title
                </label>
                <input
                  type="text"
                  id="CourseTitle"
                  className="form-control bg-black bg-opacity-25 text-black rounded-4 "
                  aria-describedby="CourseTitle"
                  placeholder="RDBMS"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="year" class="form-label">
                  Select the Year of the Program
                </label>
                <select
                  id="year"
                  class="form-select custom-select bg-black bg-opacity-25 rounded-4"
                  aria-label="Default select example"
                >
                  <option className="text-secondary" selected>
                    Open the select Menu
                  </option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd year</option>
                  <option value="3">3rd year</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="year" class="form-label">
                  Select the Semester
                </label>
                <select
                  id="sem"
                  class="form-select custom-select bg-black bg-opacity-25 rounded-4"
                  aria-label="Default select example"
                >
                  <option className="text-secondary" selected>
                    Open the select Menu
                  </option>
                  <option value="1">1st Semester</option>
                  <option value="2">2nd Semester</option>
                  <option value="3">3rd semester</option>
                  <option value="4">4th Semester</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="year" class="form-label">
                  Select the Batch
                </label>
                <select
                  id="batch"
                  class="form-select custom-select bg-black bg-opacity-25 rounded-4"
                  aria-label="Default select example"
                >
                  <option className="text-secondary" selected>
                    Open the select Menu
                  </option>
                  <option value="1">2024-2026</option>
                  <option value="2">2025-2027</option>
                  <option value="3">2024-2027</option>
                </select>
              </div>
              <div className="mb-3 text-center">
                <button type="submit" class="btn btn-danger rounded-3 pt-1">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
