import Navbar from "../components/Navbar";

export default function StaffDashboard() {
  return (
    <div>
      <Navbar />
      <div className="custom-container">
        <div
          className="card vh-100 m-3 p-4 rounded-4  "
          style={{ backgroundColor: "#D2EAC6" }}
        >
          <div className="row mt-2 align-items-center">
            <div className=" col-md-12 mx-auto"></div>
          </div>
          <div className="row mt-2 align-items-center">
            <div className="col-md-offset-3  col-md-6 mx-auto">
              <div className="d-flex align-items-center ">
                <p className="fs-5 mt-3">View all your Course</p>
                <button
                  className="btn btn-primary rounded-5 "
                  style={{ width: 70, fontSize: 13, marginLeft: 95 }}
                >
                  View
                </button>
              </div>
              <div className="d-flex  align-items-center">
                <p className="fs-5 mt-3">Add Course</p>
                <button
                  className="btn btn-success rounded-5 "
                  style={{ width: 70, fontSize: 13, marginLeft: 180 }}
                >
                  Add
                </button>
              </div>
              <div className="d-flex align-items-center">
                <p className="fs-5 mt-3">Search Course</p>
                <button
                  className="btn btn-primary rounded-5 "
                  style={{ width: 80, fontSize: 13, marginLeft: 152 }}
                >
                  Search
                </button>
              </div>
              <div className="d-flex align-items-center">
                <p className="fs-5 mt-4">View all your Material</p>
                <button
                  className="btn btn-danger rounded-5 "
                  style={{ width: 80, fontSize: 13, marginLeft: 85 }}
                >
                  Material
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
