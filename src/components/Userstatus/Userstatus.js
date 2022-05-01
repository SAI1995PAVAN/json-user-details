import React from "react";
import "./Userstatus.css";

const Userstatus = (props) => {
  const { userdata, handlemessage } = props;

  return userdata.map((user, index) => {
    return (
      <div key={index} className="userdetails">
        <div
          onClick={() => {
            handlemessage(user.name);
          }}
          className="signal"
        >
          {user.name}
        </div>
        <p
          onClick={() => {
            handlemessage(user.username);
          }}
        >
          <span>UName is </span>
          {user.username}
        </p>
        <p
          onClick={() => {
            handlemessage(user.email);
          }}
        >
          <span>Email is </span>
          {user.email}
        </p>
        <p
          onClick={() => {
            handlemessage(user.phone);
          }}
        >
          <span>phone is </span>
          {user.phone}
        </p>
        <p
          onClick={() => {
            handlemessage(user.website);
          }}
        >
          <span>Website is </span>
          {user.website}
        </p>
        <div className="notification">{user.name}</div>
      </div>
    );
  });
};

export default Userstatus;
