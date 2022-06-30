import theme from "../Theme/Light.jsx";
import Typography from "@mui/material/Typography";
import { Link, Box, Divider, Container, FormControl } from "@mui/material";

function MailEnvoye(props){
    return(<Container><Typography variant="h4"
    component="p"
    sx={{
      color: "primary.dark",
      py: theme.spacing(7),
      textAlign: "center",
    }}>Un mail vous à été envoyé !</Typography>
    <Typography variant="h6"
    component="p"
    sx={{
      color: "primary.dark",
      pt: theme.spacing(7),
      textAlign: "center",
    }}>Vous trouverez dans votre boite mail un un lien cliquable vous permettant de changer votre mot de passe.</Typography><Typography variant="h6"
    component="p"
    sx={{
      color: "secondary.main",
      textAlign: "center",
    }}> Vérifier votre boite de courrier indésirables.</Typography>
    <Box
    sx={{
        mt: theme.spacing(7),
      }}>
    <Link
        href="/connexion"
        sx={{
          textDecoration: "none",
          textAlign: "center",
          pt: theme.spacing(7),
        }}
      >
        <Typography
          variant="h5"
          component="p"
          sx={{
            color: "secondary.main",
          }}
        >
          Retourner à la page de connexion
        </Typography>
      </Link>
      </Box></Container>);
}

export default MailEnvoye;