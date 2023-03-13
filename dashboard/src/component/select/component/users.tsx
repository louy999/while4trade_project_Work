import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faServer } from "@fortawesome/free-solid-svg-icons";
import { faTradeFederation } from "@fortawesome/free-brands-svg-icons";
const Users = (props) => {
  return (
    <div className="">
      <FontAwesomeIcon icon={faUsers} />
      <FontAwesomeIcon icon={faTradeFederation} />
      <FontAwesomeIcon icon={faServer} />
    </div>
  );
};

export default Users;
