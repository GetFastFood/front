import {
    Container,
    Typography,
    FormControl,
    Button,
    Link,
  } from "@mui/material";
  import TextField from "@mui/material/TextField";
  import React, { useState, useEffect } from "react";
  import theme from "../Theme/Light.jsx";
  
  function Parrainage(props) {
    const [messageEmail, setMessageEmail] = useState("");
    const emailRegex = /\S+@\S+\.\S+/;

    const validateEmail = (event) => {
        const email = event.target.value;
        if (emailRegex.test(email)) {
          setMessageEmail("");
        } else {
          setMessageEmail("Entrez une adresse email valide");
        }
      };
    return (
      <Container
        maxWidth="sm"
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
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
          Parrainage
        </Typography>

          <Typography variant="subtitle1">
            Parrainez votre entourage afin qu'ils rejoignent la plateforme GetFast ! 
          </Typography>

          <Typography variant="h6" sx={{color : "secondary.main", textAlign :" center"}}>
            Vous êtes tous deux gagnants ! Vous obtiendrez un avantage en code Promo ! 
          </Typography>

        <FormControl variant="filled" fullWidth>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Email"
          variant="filled"
          onBlur={validateEmail}
          sx={{ mt: theme.spacing(3) }}
          required
        />
        <Typography sx={{ color: "red" }}>{messageEmail}</Typography>
        </FormControl>
        <Button
          href=""
          sx={{
            borderRadius: 2,
            backgroundColor: "secondary.main",
            size: "large",
            mt: theme.spacing(3),
            textTransform: "none",
          }}
          variant="contained"
        >
          Envoyer l'invitation
        </Button>
      </Container>
    );
  }
  
  export default Parrainage;
  