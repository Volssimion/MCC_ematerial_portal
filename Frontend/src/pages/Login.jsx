import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div
            className="mt-5 p-5 offset-md-4  col-md-4 rounded-5"
            style={{ backgroundColor: "#1c1b3b" }}
          >
            <form action="">
              <h3 className=" mb-3 text-center text-light">User Login</h3>
              <div className="mb-3">
                <label htmlFor="username" className="text-light">
                  Enter your UserID
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="UserId"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="text-light" htmlFor="password">
                  Enter your Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  id="Remberme"
                  className="form-check-input"
                />
                <label
                  htmlFor="Remberme"
                  className="form-check-label text-light"
                >
                  Remember me
                </label>
              </div>
              <div className="mb-3 d-grid">
                <button className="btn btn-danger text-ligth">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
