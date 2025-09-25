import "bootstrap/dist/css/bootstrap.min.css";
import Mcc_Logo from "../assets/mcc-logo.png";
import "../App.css";

export default function Navbar() {
  return (
    <nav className="navv navbar fixed-top ">
      <div className="container-fluid">
        <img className="navbar-brand" src={Mcc_Logo} alt="College_logo" />
      </div>
    </nav>
  );
}
