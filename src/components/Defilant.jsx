import React from "react";

function Defilant({ message }) {
  return (
    <div className="messagedefilant">
      <div data-text={message}>
        <span>{message}</span>
      </div>
    </div>
  );
}

export default Defilant;
