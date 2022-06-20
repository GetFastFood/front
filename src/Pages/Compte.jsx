import theme from "../Theme/Light.jsx";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {
  Box,
  Link,
  Button,
  Divider,
  Container,
  MenuItem,
  InputLabel,
  FilledInput,
  Select,
  FormControl,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material";
import React, { useState, useEffect } from "react";

function Compte(props) {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [messageEmail, setMessageEmail] = useState("");
  const [messagePhone, setMessagePhone] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [open, setOpen] = React.useState(false);

  // The regular exprssion to validate the email pattern
  // It may not be 100% perfect but can catch most email pattern errors and assures that the form is mostly right
  const emailRegex = /\S+@\S+\.\S+/;
  const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;

  var [values, setValues] = useState({
    name: "Langlois",
    firstname: "Mattie",
    email: "langlois.mattie@outlook.fr",
    role: "client",
    phone:"0793618366"
  });

  const submit = () => {
    console.log(values)
  }

  useEffect(() => {
   (isValidEmail && isValidPhone)
      ? setDisabled(false)
      : setDisabled(true);
  }, [values]);

  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setIsValidEmail(true);
      setMessageEmail("");
      setValues({ ...values, email: email });
    } else {
      setIsValidEmail(false);
      setMessageEmail("Please enter a valid email!");
      setValues({ ...values, email: "" });
    }
  };

  const validatePhone = (event) => {
    const phone = event.target.value;
    if (phoneRegex.test(phone)) {
      setIsValidPhone(true);
      setMessagePhone("");
      setValues({ ...values, phone: phone });
    } else {
      setIsValidPhone(false);
      setMessagePhone("Entrez un numéro valide");
      setValues({ ...values, phone: "" });
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (<>
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
        }}
      >
        Mon Compte
      </Typography>

      <FormControl variant="filled" fullWidth>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Nom"
          variant="filled"
          required
          value={values.name}
          onChange={(e) => {
            setValues({ ...values, name: e.target.value });
          }}
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Prénom"
          variant="filled"
          value={values.firstname}
          sx={{ mt: theme.spacing(3) }}
          required
          onChange={(e) => {
            setValues({ ...values, firstname: e.target.value });
          }}
        />

        <TextField
          fullWidth
          id="outlined-basic"
          label="Téléphone"
          variant="filled"
          onBlur={validatePhone}
          sx={{ mt: theme.spacing(3) }}
          value ={values.phone}
          onChange={(e)=>{setValues({...values, phone:e.target.value})}}
          required
        />
        <Typography sx={{ color: "red" }}>{messagePhone}</Typography>

        <TextField
          fullWidth
          id="outlined-basic"
          label="Email"
          variant="filled"
          value={values.email}
          onBlur={validateEmail}
          onChange={(e)=>{setValues({...values, email:e.target.value})}}
          sx={{ mt: theme.spacing(3) }}
          required
        />
        <Typography sx={{ color: "red" }}>{messageEmail}</Typography>

    
      </FormControl>
      <FormControl variant="filled" sx={{ mt: theme.spacing(3) }} fullWidth>
        <InputLabel id="demo-simple-select-label">Je suis</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Role"
          required
          value={values.role}
          onChange={(e) => {
            setValues({ ...values, role: e.target.value });
          }}
        >
          <MenuItem value={"client"}>Utilisateur</MenuItem>
          <MenuItem value={"livreur"}>Livreur</MenuItem>
        </Select>
      </FormControl>
      
        <Button
          sx={{
            borderRadius: 2,
            backgroundColor: "secondary.main",
            size: "large",
            textTransform: "capitalize",
            mt: theme.spacing(1),
          }}
          variant="contained"
          onClick={() => handleClickOpen()}
          disabled={disabled}
        >
          Sauvegarder les changements
        </Button>

        <Button
          sx={{
            borderRadius: 2,
            backgroundColor: "secondary.main",
            size: "large",
            textTransform: "capitalize",
            mt: theme.spacing(1),
          }}
          variant="contained"
          onClick={() => handleClickOpen()}
        >
          Supprimer le compte
        </Button>

        
        <Button
          sx={{
            borderRadius: 2,
            backgroundColor: "secondary.main",
            size: "large",
            textTransform: "capitalize",
            mt: theme.spacing(1),
          }}
          variant="contained"
          onClick={handleClickOpen}
        >
          Réinitialiser mot de passe
        </Button>
    </Container>
    
     <Dialog open={open} onClose={handleClose}>
     <DialogTitle>Confirmation</DialogTitle>
     <DialogContent>
       <DialogContentText>
          Veuillez entrer votre mot de passe pour confirmer votre action
       </DialogContentText>
       <TextField
         autoFocus
         margin="dense"
         id="password"
         label="Mot de passe"
         type="password"
         fullWidth
         variant="filled"
       />
     </DialogContent>
     <DialogActions>
       <Button onClick={handleClose}>Annuler</Button>
       <Button onClick={submit}>Confirmer</Button>
     </DialogActions>
   </Dialog>

   </>
  );
}

export default Compte;
