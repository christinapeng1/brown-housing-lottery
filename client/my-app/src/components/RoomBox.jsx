import React from "react";
import "./RoomBox.css";

function RoomBox(props) {
  return (
    <div className="box">
      <h2>{props.roomNumber}</h2>
      <div className="content">
        <p>Availability: Taken!</p>
        <p>Room type: {props.roomType}</p>
        <p>Building: {props.buildingName}</p>
      </div>
    </div>
  );
}

export default RoomBox;
