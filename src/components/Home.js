import React from "react";

// Define your variables here or import them if they're from another file
const name = "Liza"; // Replace with actual name
const city = "New York"; // Replace with actual city

function Home() {
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;

