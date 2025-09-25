import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/poppins/500.css";
import Navbar from "../components/Navbar";

export default function Searchpage() {
  return (
    <div>
      <Navbar />
      <div className="custom-container">
        <div
          className="card vh-100 m-3 p-4 rounded-4  "
          style={{ backgroundColor: "#D2EAC6" }}
        >
          <form action="#">
            <div className="row g-3 text-end">
              <div className="col-auto">
                <input
                  type="text"
                  id="search"
                  className="form-control bg-black bg-opacity-25 text-black rounded-5 "
                  aria-describedby="searchHelpInline"
                />
              </div>
              <div className="col-auto">
                <button type="submit" class="btn btn-danger rounded-3 pt-1">
                  search
                </button>
              </div>
            </div>
          </form>
          <div className="row mt-4 align-items-center">
            <form action="">
              <div className=" col-md-offset-3 col-md-6 mx-auto">
                <div className="mb-2  ">
                  <label htmlFor="Stream" className="form-label">
                    Select the Stream
                  </label>
                  <div>
                    <input
                      className="form-check-input bg-black bg-opacity-25"
                      type="radio"
                      name="stream"
                      id="Regular"
                    />
                    <label className="form-label ms-2 " htmlFor="Regular">
                      Regular
                    </label>
                    <input
                      className="form-check-input ms-3 bg-black bg-opacity-25"
                      type="radio"
                      name="stream"
                      id="selffiance"
                    />
                    <label className=" form-label ms-2 " htmlFor="selffiance">
                      Self Fiance
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="Degree" class="form-label">
                    Select the Degree
                  </label>
                  <select
                    id="Degree"
                    class="form-select custom-select bg-black bg-opacity-25 rounded-4"
                    aria-label="Default select example"
                  >
                    <option className="text-secondary" selected>
                      Open the select Menu
                    </option>
                    <option value="1">UG</option>
                    <option value="2">PG</option>
                    <option value="3">MPhil</option>
                    <option value="4">Ph.D</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="program" class="form-label">
                    Select the Program
                  </label>
                  <select
                    id="program"
                    class="form-select custom-select bg-black bg-opacity-25 rounded-4"
                    aria-label="Default select example"
                  >
                    <option className="text-secondary" selected>
                      Open the select Menu
                    </option>
                    <option value="1">MCA</option>
                    <option value="2">BCA</option>
                    <option value="3">Msc.Data Science</option>
                    <option value="4">Msc.Computer Science</option>
                  </select>
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
                    search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
