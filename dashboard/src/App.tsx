import React from "react";
import NavBar from "./component/navbar/navbar";
import Select from "./component/select/select";
function App() {
  return (
    <>
      <NavBar />
      <div className="cont">
        <Select />
      </div>
    </>
  );
}

export default App;
