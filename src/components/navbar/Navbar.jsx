import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <Sidebar />
        <div className="header">Alpha</div>
        <div className="icons">
          <img src="/dribbble.png" />
          <img src="/instagram.png" />
          <img src="/facebook.png" />
          <img src="/youtube.png" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
