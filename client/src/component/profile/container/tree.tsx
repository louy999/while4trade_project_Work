import React, { useState } from "react";

const TreeProfile = (props) => {
  const [data, setData]: any = useState([]);

  fetch("https://fakestoreapi.com/users")
    .then((res) => res.json())
    .then((json) => setData(json));
  return (
    <div className="tree">
      <div className="title">affiliate</div>
      <div className="list">
        <table>
          {data.map((i) => (
            <tr className="user" key={i.id} id={i.id}>
              <td className="id">{i.id}</td>
              <td className="user">{i.username}</td>
              <td className="bundle">gold</td>
              <td className="created">1\2\2002</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default TreeProfile;
