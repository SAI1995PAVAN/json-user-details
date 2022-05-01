import React from "react";

const Message = (props) => {
  const { message, time, result, msgdata } = props;

  return (
    <div>
      <h1>
        {result} {message} {time}
      </h1>
      {msgdata.map((details, index) => {
        return <p key={index}>{details}</p>;
      })}
    </div>
  );
};

export default Message;
