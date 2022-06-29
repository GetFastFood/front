import { Box, Container, Grid, Button } from "@mui/material";
import theme from "../Theme/Light.jsx";
import Typography from "@mui/material/Typography";

function SuccessPassword(props) {
  return (
    <Container sx={{  display: "flex", alignItems: "center", flexDirection: "column"}}>
      <Typography variant="h4"
        component="p"
        sx={{
          color: "primary.dark",
          py: theme.spacing(7),
          textAlign: "center",
        }}>Changement du mot de passe réussi!</Typography>
      <Typography variant="h5"
        component="p"
        sx={{
          color: "primary.dark",
          py: theme.spacing(7),
          textAlign: "center",
        }}>Cliquez sur le bouton pour vous reconnecter.</Typography>
      <Button
        href="/motdepasse/recuperation/:idUser"
        sx={{
          borderRadius: 2,
          backgroundColor: "secondary.main",
          size: "large",
          mt: theme.spacing(3),
          textTransform: "capitalize",
        }}
        variant="contained"
      >
        Nouveau mot de passe
      </Button>
    </Container>
  );
}

export default SuccessPassword;
