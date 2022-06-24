import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import theme from "../../Theme/Light.jsx";
import React, { Component, useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Container, Button, Box } from "@mui/material";
import QRCode from "react-qr-code";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function LivraisonClient(props) {
  const adresseClient = "2 parvis de la bievre";

  const [center, setCenter] = useState();

  useEffect(() => {
    const apiUrl =
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
      adresseClient +
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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "center",
        flexDirection: "column",
      }}
      maxWidth="lg"
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
        Livraison au Client
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
          Adresse du Client
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
          {adresseClient}
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
        <Button variant="outlined" onClick={handleClickOpen}
         sx={{
          borderRadius: 2,
          backgroundColor: "secondary.main",
          color: "#fff",
          size: "large",
          textTransform: "capitalize",
          mt: theme.spacing(4),
        }}>
          Generer le QRcode
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogContent>
            <QRCode
              value={window.location.hostname+"/"}
              size={200}
            />
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
    </Container>
  );
}

export default LivraisonClient;
