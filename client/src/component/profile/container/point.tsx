import React, { useState } from "react";

const Point = (props) => {
  const [data, setData]: any = useState([]);
  fetch("https://fakestoreapi.com/users")
    .then((res) => res.json())
    .then((json) => setData(json));
  return (
    <div className="point">
      <div className="title">Points</div>
      <div className="list">
        <table>
          {data.map((i) =>
            i === 0 ? (
              "not found"
            ) : (
              <tr key={i.id} id={i.id}>
                <td className="id">{i.id}</td>
                <td className="user">{i.username}</td>
                <td className="point">5000</td>
                <td className="created">1\2\2002</td>
              </tr>
            )
          )}
        </table>
      </div>
    </div>
  );
};

export default Point;
