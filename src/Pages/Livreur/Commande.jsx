import { Container, Typography } from "@mui/material";
import NouvelleCommande from "../../Components/NouvelleCommande"
import theme from "../../Theme/Light.jsx";
function Commande(props) {
    const commandeAttente = [
        {
          prénom: "Lorry",
          adresseLivraison: "56 rue perdue dans la campagne, Campagne",
          adresseRestaurant: "93 boulevard de la Seine, Nanterre",
          restaurant: "Burger King",
          articles: [
            {
              nom: "frite",
            },
            {
              nom: "Whooper",
            },
            {
              nom: "Coca",
            },
          ],
        },
        {
          prénom: "Momo",
          adresseLivraison: "56 rue d'Antony, Antony",
          adresseRestaurant: "93 test test test test test de la Seine, Nanterre",
          restaurant: "Ja veux un grand nom de restaurant",
          articles: [
            {
              nom: "et un grand nom de plat",
            },
            {
              nom: "thon",
            },
            {
              nom: "Oeuf",
            },
          ],
        },
      ];
  return <Container>
      <Typography variant="h6" component="p">Commandes en attente</Typography>
      {commandeAttente.map((commande) => {
        return <NouvelleCommande  sx={{ bgcolor: "primary.light" }} {...commande} />;
      })}
  </Container>;
}

export default Commande;
