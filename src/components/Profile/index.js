import React from "react";
import { useState } from "react";

function Profile() {
  const [bootcamperName, setBootcamperName] = useState("");
  const [numberOfReflections, setNumberOfReflections] = useState(0);

  async function getBootcamperInfo() {
    const response = await fetch("https://campfire-project.herokuapp.com/all");
    const data = await response.json();
    setBootcamperName(data.payload[0].bc_name);
    setNumberOfReflections(data.payload.length);
  }
  getBootcamperInfo();

  return (
    <section>
      <div className="profile">
        <img
          id="profile-picture"
          alt="bootcapmer"
          src="https://cdn.shopify.com/s/files/1/0170/5859/4880/files/randyVideoOverlay_550a63f5-5ff4-4ac7-917f-630ba96e4673_1980x.png?v=1578523609"
        />
      </div>
      <div className="profile-info">
        <h1 id="welcome-back">Welcome back!</h1>
        <h2 id="profile-name">{bootcamperName}</h2>
        <p>You have done {numberOfReflections} reflections so far</p>
      </div>

      <div>
        <h1>Motivational Quote of the day...</h1>
        <h3>"I thought this was America"</h3>
      </div>
    </section>
  );
}

export default Profile;

// https://image.shutterstock.com/image-photo/terenga-village-ulyanovsk-region-russia-260nw-1983510368.jpg
