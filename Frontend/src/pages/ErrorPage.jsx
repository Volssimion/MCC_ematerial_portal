import Navbar from "../components/Navbar";

export default function ErrorPage() {
  return (
    <div>
      <Navbar />
      <div className="custom-container">
        <div
          className="card vh-100 m-3 p-4 rounded-4  "
          style={{ backgroundColor: "#D2EAC6" }}
        >
          <h1>Page not Found </h1>
        </div>
      </div>
    </div>
  );
}
