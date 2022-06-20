import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import theme from "../Theme/Light";
import { Button } from "@mui/material";
import RestoCard from "../Components/RestoCard";
import Tracker from "../Layout/Tracker";
import Banner from "../Images/logoBanner.png";
import API from "../API/API";
import axios from "axios"

function Home(props) {
  const restolist = [
    {
      name: "Burger King",
      img: "https://d1ralsognjng37.cloudfront.net/7f50910b-43ff-4220-bbbd-cacddd74d5c8.jpeg",
      city:"Nanterre"
    },
    {
      name: "Chipotle",
      img: "https://www.foodbusinessnews.net/ext/resources/2020/3/ChipotleBowls_Lead.jpg?t=1584623532&width=1080",
      city:"Paris"
    },
    {
      name: "Atelier sur la braise",
      img: "https://duyt4h9nfnj50.cloudfront.net/resized/3e260a8bcb621bdd034a9a98ff22aa6b-w2880-cb.jpg",
      city:"Colombes"
    },
    {
      name: "Zozan",
      img: "https://d1ralsognjng37.cloudfront.net/6cf8a123-9806-49e6-b77e-6adcec9bfdb2.jpeg",
      city:"Nanterre"
    },
    {
      name:"McDonalds",
      img:"https://d1ralsognjng37.cloudfront.net/22cc3ccb-26f9-411e-be31-dc885c634fd9.jpeg",
      city:"Bezons"
    },
    {
      name:"KFC",
      img:"https://d1ralsognjng37.cloudfront.net/b73acc9b-9458-4af5-bb73-81773ee48d4e.jpeg",
      city:"Puteau"
    },
    {
      name:"Five Guys",
      img:"https://www.bercyvillage.com/-/media/bercyvillage/images/autres/five-guys-google-image-lr.jpg?as=0&w=771&hash=8D8F0A94DCDC632A2A39B21F490CEDEDA5CAA520",
      city:"Nanterre"
    },
    {
      name:"Dominos Pizza",
      img:"https://d1ralsognjng37.cloudfront.net/93946d8d-5343-4f1a-bfa6-94889b3f69e5.jpeg",
      city:"Rueil-Malmaison"
    }
  ];

  const classAPI = new API()

  React.useEffect(() => {
    fetch("http://91.236.239.56/api/v1/restaurant").then(response => { 
      console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    });
  }, [])
  

  return (
    <div className="font-face-gm">
      <Container
        maxWidth="false"
        sx={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "6.2em",
          mt: theme.spacing(1),
          py: theme.spacing(3),
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="h5" component="p" sx={{ color: "white" }}>
            Parrainez un ami,
          </Typography>

          <Typography variant="h4" component="p" sx={{ color: "primary.dark" }}>
            Économisez 5€
          </Typography>

          <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
            <Button
              variant="contained"
              sx={{
                mt: theme.spacing(2),
                borderRadius: 8,
                backgroundColor: "primary.dark",
                textTransform: "capitalize",
              }}
            >
              <Typography variant="h6">Allons-y</Typography>
              <ArrowForwardIcon />
            </Button>
          </Box>
        </Container>
      </Container>

      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {restolist.map((element, i) => {
            return (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <RestoCard {...element} />
              </Grid>
            );
          })}
        </Grid>
      </Container>

      <Tracker />
    </div>
  );
}

export default Home;
