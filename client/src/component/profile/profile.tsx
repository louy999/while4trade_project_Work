import React from "react";
import "react-circular-progressbar/dist/styles.css";
import "./profile.css";

import UserProfile from "./container/user";
import TreeProfile from "./container/tree";
import Transaction from "./container/transaction";
import URL from "./container/url";
import Point from "./container/point";
import Bundle from "./container/bundle";
const Profile = (props: any) => {
  return (
    <>
      <div className="back"></div>
      <div className=" container profile ">
        <UserProfile />
        <Bundle />
        <Point />
        <TreeProfile />
        <Transaction />
        <URL />
      </div>
    </>
  );
};

export default Profile;
