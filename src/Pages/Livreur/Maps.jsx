import React, { Component, useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

function Maps() {
  const adress = "20 rue Joseph Delon, 92160";

  const [center, setCenter] = useState();

  useEffect(() => {
    const apiUrl =
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
      adress +
      "&key=AIzaSyBPmfKvHBL7DvkJW-svBtIFfqWL4TaThFY";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setCenter({lat : data.results[0].geometry.location.lat , lng : data.results[0].geometry.location.lng}));
  }, []);

  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyBsShKf0R4QgMbFw-KIQd2iXqDeGVobuUg">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={20}
        ></GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Maps;
