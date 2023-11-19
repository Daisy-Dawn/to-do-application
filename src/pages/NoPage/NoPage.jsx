import "./NoPage.css";
import { SmileOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";

export const NoPage = () => {
  return (
    <>
    <div className="bgimg w3-display-container w3-animate-opacity w3-text-white">
  <div className="w3-display-topleft w3-padding-large w3-xlarge">
  <div className="header-logo">
              <span>
                <img
                  className="logo-image"
                  src="/images/Home/logo.png"
                  alt=""
                />
              </span>
              <h2 className="header-name">CreativeME</h2>
            </div>
  </div>
  <div className="w3-display-middle">
    <h1 className="noPage-h1 w3-animate-top">Sorry the page you visited does not exist</h1>
    <hr className="horizontal-rule" />
    <button className="btn-grad"><a href="/">Back Home</a></button>
  </div>
</div>
    </>
  );
};
