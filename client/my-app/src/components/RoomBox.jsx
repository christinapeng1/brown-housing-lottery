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

export default function RoomBoxDisplay() {
  const mockData = [
    {
      roomNumber: "BARBOUR 080 081-1",
      roomType: "Double (Suite/Apartment)",
      buildingName: "BARBOUR HALL",
    },
    {
      roomNumber: "BARBOUR 080 081-2",
      roomType: "Double (Suite/Apartment)",
      buildingName: "BARBOUR HALL",
    },
    {
      roomNumber: "BARBOUR 080 084-1",
      roomType: "Double (Suite/Apartment)",
      buildingName: "BARBOUR HALL",
    },
    {
      roomNumber: "BARBOUR 080 084-2",
      roomType: "Double (Suite/Apartment)",
      buildingName: "BARBOUR HALL",
    },
    {
      roomNumber: "BARBOUR 120 121-1",
      roomType: "Double (Suite/Apartment)",
      buildingName: "BARBOUR HALL",
    },
    {
      roomNumber: "BARBOUR 120 121-2",
      roomType: "Double (Suite/Apartment)",
      buildingName: "BARBOUR HALL",
    },
    {
      roomNumber: "BARBOUR 120 123-1",
      roomType: "Double (Suite/Apartment)",
      buildingName: "BARBOUR HALL",
    },
    {
      roomNumber: "BARBOUR 120 123-2",
      roomType: "Single (Suite/Apartment)",
      buildingName: "BARBOUR HALL",
    },
    {
      roomNumber: "BARBOUR 160 163-1",
      roomType: "Double (Suite/Apartment)",
      buildingName: "BARBOUR HALL",
    },
    {
      roomNumber: "BARBOUR 160 164-2",
      roomType: "Double (Suite/Apartment)",
      buildingName: "BARBOUR HALL",
    },
  ];

  const roomBox = mockData.map((room) => (
    <RoomBox
      roomNumber={room.roomNumber}
      roomType={room.roomType}
      buildingName={room.buildingName}
    />
  ));

  return <div className="box-container">{roomBox}</div>;
}
