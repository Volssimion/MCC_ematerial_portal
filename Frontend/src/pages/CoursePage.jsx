import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/poppins/500.css";

export default function CoursePage() {
  return (
    <div>
      <Navbar />
      <div className="custom-container">
        <div
          className="card vh-100 m-3 p-4 rounded-4  "
          style={{ backgroundColor: "#D2EAC6" }}
        >
          <h2>Course</h2>
          <div className="row mt-2 align-items-center">
            <div className="offset-col-md-2 col-md-8 mx-auto text-start ">
              <ul className="mt-3 overflow-auto " style={{ maxHeight: "65vh" }}>
                <li
                  className="fs-5 p-2 mb-3"
                  style={{
                    color: "#78091E",
                    cursor: "pointer",
                  }}
                >
                  Data Structure and Algorithm Laboratory (MCA900)
                </li>
                <li
                  className="fs-5 p-2 mb-3"
                  style={{
                    color: "#78091E",
                    cursor: "pointer",
                  }}
                >
                  Data Structure and Algorithm Laboratory (MCA900)
                </li>
                <li
                  className="fs-5 p-2 mb-3"
                  style={{
                    color: "#78091E",
                    cursor: "pointer",
                  }}
                >
                  Data Structure and Algorithm Laboratory (MCA900)
                </li>
                <li
                  className="fs-5 p-2 mb-3"
                  style={{
                    color: "#78091E",
                    cursor: "pointer",
                  }}
                >
                  Data Structure and Algorithm Laboratory (MCA900)
                </li>
                <li
                  className="fs-5 p-2 mb-3"
                  style={{
                    color: "#78091E",
                    cursor: "pointer",
                  }}
                >
                  Data Structure and Algorithm Laboratory (MCA900)
                </li>
                <li
                  className="fs-5 p-2 mb-3"
                  style={{
                    color: "#78091E",
                    cursor: "pointer",
                  }}
                >
                  Data Structure and Algorithm Laboratory (MCA900)
                </li>
                <li
                  className="fs-5 p-2 mb-3"
                  style={{
                    color: "#78091E",
                    cursor: "pointer",
                  }}
                >
                  Data Structure and Algorithm Laboratory (MCA900)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
