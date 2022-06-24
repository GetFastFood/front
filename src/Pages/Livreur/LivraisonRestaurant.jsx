import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import theme from "../../Theme/Light.jsx";
import React, { Component, useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Container, Button, Box, Link } from "@mui/material";

function LivraisonRestaurant(props) {
  const adresseRestaurant = "73 rue des Cevennes";

  const [center, setCenter] = useState();

  useEffect(() => {
    const apiUrl =
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
      adresseRestaurant +
      "&key=AIzaSyBPmfKvHBL7DvkJW-svBtIFfqWL4TaThFY";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) =>
        setCenter({
          lat: data.results[0].geometry.location.lat,
          lng: data.results[0].geometry.location.lng,
        })
      );
  }, []);

  const containerStyle = {
    width: "300px",
    height: "300px",
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h4"
        component="p"
        sx={{
          color: "primary.dark",
          py: theme.spacing(10),
          textAlign: "center",
        }}
      >
        Livraison acceptée
      </Typography>
      <Box
        sx={{
          backgroundColor: "primary.light",
          px: theme.spacing(1),
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: "10px",
          py: theme.spacing(4),
        }}
      >
        <Typography
          variant="h5"
          component="p"
          sx={{
            textAlign: "center",
            color: "primary.dark",
          }}
        >
          Adresse du Restaurant
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{
            textAlign: "center",
            color: "#fff",
            mb: theme.spacing(4),
          }}
        >
          {adresseRestaurant}
        </Typography>
        <div>
          <LoadScript googleMapsApiKey="AIzaSyBsShKf0R4QgMbFw-KIQd2iXqDeGVobuUg">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={18}
            >
              <Marker position={center}></Marker>
            </GoogleMap>
          </LoadScript>
        </div>
      </Box>
      <Link href="/livreur/livraisonclient">
        <Button
          sx={{
            borderRadius: 2,
            backgroundColor: "secondary.main",
            size: "large",
            textTransform: "capitalize",
            mt: theme.spacing(4),
          }}
          variant="contained"
        >
          Commande récupérée
        </Button>
      </Link>
    </Container>
  );
}

export default LivraisonRestaurant;
