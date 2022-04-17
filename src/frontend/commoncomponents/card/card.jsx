import React from "react";
import "../../commonstyles/Globalstyles.css";
import "./style.css";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <>
      <div className="card-container flex-col">
        {/* <div className='card-colortag'>kk</iv> */}
        <div className="flex-row content-flexspace">
          <h3 className="card-heading">
            {(props.data.title = "" ? props.data.title : "Empty title")}
          </h3>
          {/* <p>star</p> */}
        </div>

        <p className="text ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It wa
        </p>
        <div className="date">Created on 22/22/2222</div>
        <div className="flex-row content-flexend ">
          <span className="action-button color-lightblue">Edit</span>

          <span className="action-button color-red">Delete</span>

          <span className="action-button color-darkorange">Archive</span>
        </div>
      </div>
    </>
  );
};

export default Card;
