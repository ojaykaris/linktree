import "./default-layout.css";
import zuriLogo from "../../images/zuri-logo.svg";
import i4gLogo from "../../images/I4G-logo.svg";

function DefaultLayout(props) {
  return (
    <div className="default-layout">
      <div className="default-layout__container">{props.children}</div>

      <footer className="footer">
        <div className="container-fluid">
          <img src={zuriLogo} alt="zuri logo" />
          <p className="footer-info">HNG Internship 9 Frontend Task</p>
          <img src={i4gLogo} alt="i4g logo" />
        </div>
      </footer>
    </div>
  );
}

export default DefaultLayout;
