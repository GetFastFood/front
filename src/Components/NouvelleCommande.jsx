import { Typography, Container, Box, Fab } from "@mui/material";
import theme from "../Theme/Light.jsx";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';


function NouvelleCommande(props) {
  return (
    <Container sx={{ backgroundColor: "primary.light", py: theme.spacing(2), mt: theme.spacing(2), borderRadius: "10px", boxShadow: 7, '&:hover': {
        backgroundColor: 'primary.main',
        opacity: 0.8,
      } }}>
      <Box>
        <Typography variant="h6" component="p">
          Adresse de livraison :
        </Typography>
        <Typography
          sx={{
            lineHeight: 1,
            color: " #ffffff",
          }}
        >
          {props.adresseLivraison}
        </Typography>
        <Typography variant="h6" component="p">
          Adresse du restaurant :
        </Typography>
        <Typography
          sx={{
            lineHeight: 1,
            color: " #ffffff",
          }}
        >
          {props.adresseRestaurant}
        </Typography>
        <Typography variant="h6" component="p">
          Commande pour {props.prénom}
        </Typography>

        <Typography
        variant="h6" component="p"
          sx={{
            color: " #ffffff",
            lineHeight: 1,
                mb: theme.spacing(1),
          }}
        >
          {props.restaurant}
        </Typography>

        {props.articles.map((article) => (
          <Typography
            sx={{
              color: "primary.dark",
            }}
          >
            <li>{article.nom}</li>
          </Typography>
        ))}
        <Box sx ={{display: "flex", justifyContent: "space-evenly", mt: theme.spacing(2)}}>
        <Fab
          href="/livraison"
          size="medium"
          sx={{
            backgroundColor: "#66BB6A",
            '&:hover': {
                backgroundColor: '#388e3c',
                opacity: 0.9,},
            color: "white",
          }}
        >
          <CheckIcon  />
        </Fab>
        <Fab
          size="medium"
          sx={{
            backgroundColor: "#F44336",
            '&:hover': {
                backgroundColor: '#d32f2f',
                opacity: 0.9,},
            color: "white",
          }}
        >
          <CloseIcon/>
        </Fab>
        </Box>
      </Box>
    </Container>
  );
}

export default NouvelleCommande;
