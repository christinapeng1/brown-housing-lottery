import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../components/Home.css";
import RoomBox from "../components/RoomBox.jsx";
import Footer from "../components/Footer.jsx";

import {
  fetchAPISearch,
  fetchAPILoad,
  fetchAPIView,
} from "../components/ServerHandler.tsx";

export default function Home() {
  const [availability, setAvailability] = useState(""); // State to hold the availability value
  const [building, setBuilding] = useState(""); // State to hold the building value
  const [roomType, setRoomType] = useState(""); // State to hold the room type value
  const [filteredData, setFilteredData] = useState([]); // State to hold the filtered data
  const [roomBox, setRoomBox] = useState([]); // Define roomBox state
  const [filePath, setFilePath] = useState("");

  // const handleFilterClick = async () => {
  //   try {
  //     const data = await fetchAPISearch(building);
  //     console.log("Filtered Data:", data); // Log the filtered data
  //     setFilteredData(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  useEffect(() => {
    const storedFilePath = localStorage.getItem("filePath");
    if (storedFilePath) {
      setFilePath(storedFilePath);
    }
  }, []);

  // Function to handle changes in the filepath input field
  const handleFilePathChange = (e) => {
    const value = e.target.value;
    setFilePath(value);
    // Store the filepath value in localStorage
    localStorage.setItem("filePath", value);
  };

  // Load file data when the component mounts
  const loadFileData = async () => {
    try {
      // Fetch file data from the server
      await fetchAPILoad(filePath);
      viewData();
      //"/Users/kseniiadolgopolova/Desktop/Browncoursework/CS0320/brown-housing-lottery/server/data/Sheet 2-Housing.csv"
      console.log("File data loaded successfully.");
    } catch (error) {
      console.error("Error loading file data:", error);
    }
  };

  useEffect(() => {
    viewData();
  }, [building, roomType]);

  const viewData = async () => {
    // Fetch and set room data when "View" button is clicked
    try {
      const data = await fetchAPIView();
      console.log("Room Data:", data); // Log the room data
      //setFilteredData(data);

      const filteredRooms = data.filter(
        (room) =>
          room.roomNumber.toLowerCase().includes(building.toLowerCase()) &&
          room.roomType.toLowerCase().includes(roomType.toLowerCase())
      );

      const roomBox = filteredRooms.map((room) => (
        <RoomBox
          roomNumber={room.roomNumber}
          roomType={room.roomType}
          buildingName={room.buildingName}
        />
      ));
      setRoomBox(roomBox);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
      roomNumber: "MINDEN 308-1",
      roomType: "Double",
      buildingName: "MINDEN HALL",
    },
    {
      roomNumber: "MINDEN 308-2",
      roomType: "Double",
      buildingName: "MINDEN HALL",
    },
    {
      roomNumber: "SLATER 201-1",
      roomType: "Quad",
      buildingName: "SLATER HALL",
    },
    {
      roomNumber: "SLATER 201-2",
      roomType: "Quad",
      buildingName: "SLATER HALL",
    },
    {
      roomNumber: "SLATER 201-3",
      roomType: "Quad",
      buildingName: "SLATER HALL",
    },
    {
      roomNumber: "SLATER 206-1",
      roomType: "Single",
      buildingName: "SLATER HALL",
    },
    {
      roomNumber: "GREG A 611-1",
      roomType: "Triple",
      buildingName: "GREGORIAN QUAD A",
    },
    {
      roomNumber: "GREG A 611-2",
      roomType: "Triple",
      buildingName: "GREGORIAN QUAD A",
    },
  ];

  // const filteredMockData = mockData.filter(
  //   (room) =>
  //     room.roomNumber.toLowerCase().includes(building.toLowerCase()) &&
  //     room.roomType.toLowerCase().includes(roomType.toLowerCase())
  // );

  return (
    <>
      <Header />
      <div className="banner">
        <span className="banner-text">
          Meet your new ฅ՞•ﻌ•՞ฅ bear home!˚ ༘ ೀ⋆｡˚{" "}
        </span>
      </div>
      <div className="filter-banner">
        <h1>Filter rooms: </h1>
        {/*<h3> Availability:</h3>
        <input
          className="options"
          type="Availability"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
        />*/}
        <h3> Room type:</h3>
        <select
          className="options"
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
        >
          <option value="">Any</option>
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="triple">Triple</option>
          <option value="suite">Suite</option>
        </select>
        <h3> Building:</h3>
        <input
          className="options"
          type="Building"
          value={building}
          onChange={(e) => setBuilding(e.target.value)}
        />
        {/* Filepath input */}
        <h3> File path:</h3>
        <input
          className="options"
          type="text"
          value={filePath}
          onChange={handleFilePathChange}
        />
        {/* Load file button */}
        <button onClick={loadFileData}>Load/View</button>
        {/* Filter button to trigger the data fetching
        <button onClick={handleViewClick}>View</button>
        <button onClick={handleFilterClick}>Filter</button>*/}
        {/* Display the filtered data */}
        {/* Render room boxes using room data */}
        {/* <div dangerouslySetInnerHTML={{ __html: filteredData }}></div> */}
      </div>
      <div className="box-container">{roomBox}</div>
      <Footer />
    </>
  );
}
