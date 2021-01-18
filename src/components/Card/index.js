import React from "react";

//CSS
import "./index.css";

//Images
import Question from "../../images/icon-question.png";

function Card({ children, title }) {
  return (
    <div className="card mt-4">
      <h5 className="d-flex align-items-center px-4 py-3 border-bottom bg-light m-0">
        <img src={Question} alt="" title="" className="mr-2" /> {title}
      </h5>
      <div className="card-body p-4">{children}</div>
    </div>
  );
}

export default Card;
