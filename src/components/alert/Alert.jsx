import React from "react";
import "./Alert.scss";

export default function Alert({ type, message }) {
  return (
    <div className={`alert alert--${type}`}>
      <p className="alert__message">{message}</p>
    </div>
  );
}
