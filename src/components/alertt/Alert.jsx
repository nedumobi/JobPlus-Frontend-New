import React from "react";
import "./Alert.scss";

export default function Alert({ type, data }) {
  return (
    <div className={`alert alert--${type}`}>
      <p className="alert__message">{data.message}</p>
      <ul className="alert__details">
        {data?.details?.map((detail, index) => (
          <li key={index} className="alert__details">
            {detail.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
