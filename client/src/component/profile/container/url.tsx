import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const URL = (props) => {
  const text = "www.Whale4Trade.com.test.123456 ";
  const copy = () => {
    navigator.clipboard.writeText(text);
  };
  return (
    <div className="url">
      <span>URL:</span>
      <NavLink to="/">www.Whale4Trade.com.test.123456 </NavLink>
      <span className="icon " onClick={() => copy()}>
        <FontAwesomeIcon icon={faCopy} />
        Copy
      </span>
    </div>
  );
};

export default URL;
