import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function Login() {
  const [user_id, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        user_id,
        password,
      });

      const { token, user } = res.data;

      // Save JWT & role in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("role", user.role);
      localStorage.setItem("user_id", user.user_id);

      // Redirect based on role
      if (user.role === "student") {
        navigate("/searchPage");
      } else if (
        user.role === "assistant_professor" ||
        user.role === "coordinator"
      ) {
        navigate("/staffDashboardPage");
      } else {
        navigate("/login");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div
            className="mt-5 p-5 offset-md-4 col-md-4 rounded-5"
            style={{ backgroundColor: "#1c1b3b" }}
          >
            <form onSubmit={handleLogin}>
              <h3 className="mb-3 text-center text-light">User Login</h3>

              {error && <p className="text-danger text-center">{error}</p>}

              <div className="mb-3">
                <label htmlFor="username" className="text-light">
                  Enter your UserID
                </label>
                <input
                  type="text"
                  id="username"
                  value={user_id}
                  onChange={(e) => setUserId(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  placeholder="Password"
                  required
                />
              </div>

              <div className="form-check mb-3">
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
                <button type="submit" className="btn btn-danger text-light">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
