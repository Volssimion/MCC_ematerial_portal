import Navbar from "../components/Navbar";
import programData from "../utils/programData";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Searchpage() {
  const navigate = useNavigate();
  const [stream, setStream] = useState("");
  const [degree, setDegree] = useState("");

  const [searchData, setSearchData] = useState({
    program_id: "",
    year: 0,
    sem: 0,
    batch: "",
  });

  const handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setSearchData((currentData) => {
      const newValue =
        name === "year" || name === "sem" ? parseInt(value, 10) || 0 : value;
      return { ...currentData, [name]: newValue };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { program_id, year, sem, batch } = searchData;

    if (!program_id || !year || !sem || !batch) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete form",
        text: "⚠️ Please fill all required fields before submitting.",
        timer: 2000,
        showConfirmButton: false,
      });
      return;
    }

    navigate("/coursePage", { state: searchData });
  };

  const selectedData =
    programData[stream] && programData[stream][degree]
      ? programData[stream][degree]
      : null;

  const availablePrograms = selectedData ? selectedData.programs : [];
  const availableYears = selectedData ? selectedData.years : [];
  const availableSemesters =
    selectedData && searchData.year
      ? selectedData.semesters[availableYears[searchData.year - 1]]
      : [];
  const availableBatches = selectedData ? selectedData.batches : [];

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
                <button type="submit" className="btn btn-danger rounded-3 pt-1">
                  search
                </button>
              </div>
            </div>
          </form>
          <div className="row mt-4 align-items-center">
            <form onSubmit={handleSubmit}>
              <div className=" col-md-offset-3 col-md-6 mx-auto">
                <div className="mb-2  ">
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
                        setSearchData({
                          program_id: "",
                          year: 0,
                          sem: 0,
                          batch: "",
                        });
                      }}
                    />
                    <label className="form-label ms-2 " htmlFor="Regular">
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
                        setSearchData({
                          program_id: "",
                          year: 0,
                          sem: 0,
                          batch: "",
                        });
                      }}
                    />
                    <label className=" form-label ms-2 " htmlFor="selffiance">
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
                    aria-label="Default select example"
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
                    aria-label="Default select example"
                    disabled={!stream || !degree}
                    name="program_id"
                    value={searchData.program_id}
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
                  <label htmlFor="year" className="form-label">
                    Select the Year of the Program
                  </label>
                  <select
                    id="year"
                    className="form-select custom-select bg-black bg-opacity-25 rounded-4"
                    aria-label="Default select example"
                    disabled={!stream || !degree}
                    name="year"
                    value={searchData.year}
                    onChange={handleChange}
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
                    aria-label="Default select example"
                    disabled={!stream || !degree}
                    name="sem"
                    value={searchData.sem}
                    onChange={handleChange}
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
                    aria-label="Default select example"
                    disabled={!stream || !degree}
                    name="batch"
                    value={searchData.batch}
                    onChange={handleChange}
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
