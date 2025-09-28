import Navbar from "../components/Navbar";

export default function MaterialForm() {
  return (
    <div>
      <Navbar />
      <div className="custom-container">
        <div
          className="card vh-100 m-3 p-4 rounded-4  "
          style={{ backgroundColor: "#D2EAC6" }}
        >
          <h5>Material Form</h5>
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
                />
              </div>
              <div className="mb-3">
                <label htmlFor="materialTitle" class="form-label">
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
                <label htmlFor="materialType" class="form-label">
                  Select the Material Type
                </label>
                <select
                  id="materialType"
                  class="form-select custom-select bg-black bg-opacity-25 rounded-4"
                  aria-label="Default select example"
                >
                  <option className="text-secondary" selected>
                    Open the select Menu
                  </option>
                  <option value="1">Link</option>
                  <option value="2">Doc</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="materialLink" class="form-label">
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
                <label htmlFor="materialDoc" class="form-label">
                  Material Document
                </label>
                <input
                  type="file"
                  id="materialDoc"
                  className="form-control bg-black bg-opacity-25 text-black rounded-4 "
                  aria-describedby="materialDocumentBlock"
                  placeholder="Pdf/Ppt"
                />
                <span id="materialDocumentBlock" class="form-text">
                  Size : Pdf Or Ppt should under 1mb and attach only 1 Document.
                </span>
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
