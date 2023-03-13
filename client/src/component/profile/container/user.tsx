import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faCircle,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import imgProfile from "../../../image/blank-profile-picture-gc8e2267bd_1280.png";

const UserProfile = () => {
  const status: boolean = true;
  return (
    <div className="user">
      <div className="photo">
        <div className="name-ed">
          <img src={imgProfile} alt="" />
          <span className="edit-icon">
            <span>edit</span>
            <FontAwesomeIcon icon={faPenToSquare} />
          </span>
          <span className="status">
            {status ? (
              <FontAwesomeIcon icon={faCircle} className="online" />
            ) : (
              <FontAwesomeIcon icon={faCircleXmark} className="offline" />
            )}
          </span>
        </div>
      </div>
      <div className="info">
        <span className="name">
          <span>
            <span className="title">name:</span>
            <span className="test">test</span>
          </span>
          <span className="edit-icon">
            <FontAwesomeIcon icon={faPenToSquare} />
          </span>
        </span>
        <span className="email">
          <span>
            <span className="title">email:</span>
            <span className="test">test@test.test</span>
          </span>
          <span className="edit-icon">
            <FontAwesomeIcon icon={faPenToSquare} />
          </span>
        </span>
        <span className="number">
          <span>
            <span className="title">number:</span>
            <span className="test">12345678910</span>
          </span>
          <span className="edit-icon">
            <FontAwesomeIcon icon={faPenToSquare} />
          </span>
        </span>
      </div>
      <div className="count">
        <div className="tree">
          <span className="title">tree:</span>
          <span>123</span>
        </div>
        <div className="line"></div>
        <div className="bundle">
          <span className="title">bundle:</span>
          <span>123</span>
        </div>
        <div className="line"></div>
        <div className="point">
          <span className="title">point:</span>
          <span>123</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
