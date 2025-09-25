import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/poppins/500.css";

export default function ViewMaterial() {
  return (
    <div>
      <Navbar />
      <div className="custom-container">
        <div
          className="card vh-100 m-3 p-4 rounded-4  "
          style={{ backgroundColor: "#D2EAC6" }}
        >
          <h5>Your Material</h5>
          <div className="row mt-4 align-items-center">
            <div className="offset-col-md-1 col-md-10 mx-auto text-start ">
              <ul
                className="mt-3 overflow-auto "
                style={{ listStyleType: "none", maxHeight: "65vh" }}
              >
                <li className="p-3">
                  <div className="row ">
                    <div className="col-md-2 p-2  bg-black bg-opacity-25 border border-black">
                      01-08-2025
                    </div>
                    <div
                      className="col-md-6 p-2 bg-black bg-opacity-25 border border-black"
                      style={{ color: "#78091E" }}
                    >
                      Unit - 1 Rdbms notes
                    </div>
                    <div className="col-md-3 p-2 bg-black bg-opacity-25 border border-black">
                      <button
                        className="btn btn-sm  btn-primary rounded-5 me-3"
                        style={{ width: 70, fontSize: 13 }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger rounded-5"
                        style={{ width: 70, fontSize: 13 }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>

                <li className="p-3">
                  <div className="row ">
                    <div className="col-md-2 p-2  bg-black bg-opacity-25 border border-black">
                      01-08-2025
                    </div>
                    <div
                      className="col-md-6 p-2 bg-black bg-opacity-25 border border-black"
                      style={{ color: "#78091E" }}
                    >
                      Unit - 1 Rdbms notes
                    </div>
                    <div className="col-md-3 p-2 bg-black bg-opacity-25 border border-black">
                      <button
                        className="btn btn-sm  btn-primary rounded-5 me-3"
                        style={{ width: 70, fontSize: 13 }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger rounded-5"
                        style={{ width: 70, fontSize: 13 }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>

                <li className="p-3">
                  <div className="row ">
                    <div className="col-md-2 p-2  bg-black bg-opacity-25 border border-black">
                      01-08-2025
                    </div>
                    <div
                      className="col-md-6 p-2 bg-black bg-opacity-25 border border-black"
                      style={{ color: "#78091E" }}
                    >
                      Unit - 1 Rdbms notes
                    </div>
                    <div className="col-md-3 p-2 bg-black bg-opacity-25 border border-black">
                      <button
                        className="btn btn-sm  btn-primary rounded-5 me-3"
                        style={{ width: 70, fontSize: 13 }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger rounded-5"
                        style={{ width: 70, fontSize: 13 }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>

                <li className="p-3">
                  <div className="row ">
                    <div className="col-md-2 p-2  bg-black bg-opacity-25 border border-black">
                      01-08-2025
                    </div>
                    <div
                      className="col-md-6 p-2 bg-black bg-opacity-25 border border-black"
                      style={{ color: "#78091E" }}
                    >
                      Unit - 1 Rdbms notes
                    </div>
                    <div className="col-md-3 p-2 bg-black bg-opacity-25 border border-black">
                      <button
                        className="btn btn-sm  btn-primary rounded-5 me-3"
                        style={{ width: 70, fontSize: 13 }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger rounded-5"
                        style={{ width: 70, fontSize: 13 }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>

                <li className="p-3">
                  <div className="row ">
                    <div className="col-md-2 p-2  bg-black bg-opacity-25 border border-black">
                      01-08-2025
                    </div>
                    <div
                      className="col-md-6 p-2 bg-black bg-opacity-25 border border-black"
                      style={{ color: "#78091E" }}
                    >
                      Unit - 1 Rdbms notes
                    </div>
                    <div className="col-md-3 p-2 bg-black bg-opacity-25 border border-black">
                      <button
                        className="btn btn-sm  btn-primary rounded-5 me-3"
                        style={{ width: 70, fontSize: 13 }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger rounded-5"
                        style={{ width: 70, fontSize: 13 }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>

                <li className="p-3">
                  <div className="row ">
                    <div className="col-md-2 p-2  bg-black bg-opacity-25 border border-black">
                      01-08-2025
                    </div>
                    <div
                      className="col-md-6 p-2 bg-black bg-opacity-25 border border-black"
                      style={{ color: "#78091E" }}
                    >
                      Unit - 1 Rdbms notes
                    </div>
                    <div className="col-md-3 p-2 bg-black bg-opacity-25 border border-black">
                      <button
                        className="btn btn-sm  btn-primary rounded-5 me-3"
                        style={{ width: 70, fontSize: 13 }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger rounded-5"
                        style={{ width: 70, fontSize: 13 }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
