import theme from "../Theme/Light.jsx";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Link, Button, Divider, Container, FormControl } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

function MotDePasse() {
  const emailRegex = /\S+@\S+\.\S+/;

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [messageEmail, setMessageEmail] = useState("");

  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setIsValidEmail(true);
      setMessageEmail("");
    } else {
      setIsValidEmail(false);
      setMessageEmail("Please enter a valid email!");
    }
  };

   const handleSubmit = e =>{
    e.preventDefault();

    const data = {
      email: this.email
    };

    axios.post('forgot', data).then(
      res => {
        console.log(res)
      }
    ).catch(
      err => {
        console.log(err);
      }
    )
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
          py: theme.spacing(7),
          textAlign: "center",
        }}
      >
        Mot de passe oublié
      </Typography>
      <Typography
        variant="h6"
        component="p"
        sx={{
          color: "primary.dark",
          py: theme.spacing(5),
          mb: theme.spacing(3),
          textAlign: "center",
        }}
      >
        Vous avez oublié votre mot de passe? Pas de panique nous vous envoyons un mail!
      </Typography>
      <FormControl onSubmit={handleSubmit}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Email"
        required
        onBlur={validateEmail}
        variant="filled"
      />
      </FormControl>
      <Typography sx={{ color: "red" }}>{messageEmail}</Typography>
      <Button
      href="./success"
        sx={{
          borderRadius: 2,
          backgroundColor: "secondary.main",
          size: "large",
          mt: theme.spacing(3),
          textTransform: "capitalize",
        }}
        variant="contained"
        onChange={e => this.email = e.target.value}
      >
        Connexion
      </Button>
      <Divider
        sx={{
          my: theme.spacing(7),
        }}
      />

      <Typography
        variant="h6"
        component="p"
        sx={{
          color: "primary.dark",
        }}
      >
        Retourner à la page de
      </Typography>
      <Link
        href="/connexion"
        sx={{
          textDecoration: "none",
        }}
      >
        <Typography
          variant="h5"
          component="p"
          sx={{
            color: "secondary.main",
          }}
        >
          Connexion
        </Typography>
      </Link>
    </Container>
  );
}

export default MotDePasse;
