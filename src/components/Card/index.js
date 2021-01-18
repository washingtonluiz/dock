import React from "react";

function Card({ children, title }) {
  return (
    <div className="card mt-4">
      <h5 className="px-4 py-3 border-bottom bg-light m-0">{title}</h5>
      <div className="card-body p-4">{children}</div>
    </div>
  );
}

export default Card;
