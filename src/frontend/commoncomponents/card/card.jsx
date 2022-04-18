import React from "react";
import "../../commonstyles/Globalstyles.css";
import "./style.css";
import { Link } from "react-router-dom";


const Card = (props) => {
  
  const coloredStyle = {
    backgroundColor: `${props.data.bgcolor}`
  };
  return (
    <>
      <div className={`card-container flex-col `} style={coloredStyle}>
        <div className="flex-row content-flexspace">
          <h3 className="card-heading">
            {props.data.title != "" ? props.data.title : "Empty title"}
          </h3>
        </div>

        <p className="text ">{props.data.content}</p>
        <div className="tag">Tag :{props.data.tag}</div>
        {props?.buttons?
        <div className="flex-row content-flexend ">
          <span onClick={props.edit} className="action-button color-lightblue">
            Edit
          </span>

          <span className="action-button color-red" onClick={props.delete}>
            Delete
          </span>

          <span
            className="action-button color-darkorange"
            onClick={props.archive}
          >
            Archive
          </span>
        </div>:
        null
}
      </div>
    </>
  );
};

export default Card;