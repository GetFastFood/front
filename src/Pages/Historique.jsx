import { Typography, Container } from "@mui/material";
import theme from "../Theme/Light.jsx";
import BlocCommande from "../Components/BlocCommande";
import * as React from "react";
import API from "../API/API";

function Historique(props) {
  const classAPI = new API();
  const [commande, setCommande] = React.useState([]);
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    classAPI.getCommande("62b1a668fe9e11112dc92faa").then(function (response) {
      setCommande(response);
      setLoaded(true);
    });
  }, []);
  const commandelist = [
    {
      nom: "Burger King",
      localisation: "Paris",
      status: "Terminé",
      date: "18 avril",
      image: "https://d1ralsognjng37.cloudfront.net/7f50910b-43ff-4220-bbbd-cacddd74d5c8.jpeg",
      articles: [
        {
          nom: "frite",
          prix: 5,
        },
        {
          nom: "Whooper",
          prix: 5,
        },
        {
          nom: "test",
          prix: 54,
        },
      ],
    },
    {
      nom: "Chipotle",
      localisation: "Versailles",
      status: "Cuisine",
      date: "20 mai",
      image: "https://www.foodbusinessnews.net/ext/resources/2020/3/ChipotleBowls_Lead.jpg?t=1584623532&width=1080",
      articles: [
        {
          nom: "Tacos",
          prix: 6,
        },
        {
          nom: "Eau",
          prix: 10,
        },
        {
          nom: "Chips",
          prix: 5,
        },
        {
          nom: "Sauce Ketchup",
          prix: 1,
        },
      ],
    },
    {
      nom: "McDonalds",
      localisation: "Orleans",
      status: "Attente",
      date: "17 Juin",
      image: "https://www.foodbusinessnews.net/ext/resources/2020/3/ChipotleBowls_Lead.jpg?t=1584623532&width=1080",
      articles: [
        {
          nom: "Maxi Best Of",
          prix: 12,
        },
        {
          nom: "Happy Meal",
          prix: 10,
        },
        {
          nom: "Ptit Wrap",
          prix: 5,
        },
        {
          nom: "Sauce Chinoise",
          prix: 1,
        },
      ],
    },
  ];
  

  return (
    <Container>
      <Typography variant="h6" component="p">Historique des commandes</Typography>
      {commandelist.map((commande) => {
        return <BlocCommande sx={{ bgcolor: "primary.light" }} {...commande} />;
      })}
    </Container>
  );
}

export default Historique;
