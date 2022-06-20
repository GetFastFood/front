import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Fab, Container, Chip, Link } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import theme from "../Theme/Light";
import Menu from "../Components/Menu";
import Produit from "../Components/Produit";
import Panier from "../Layout/Panier";
import { makeStyles } from "@mui/styles";

function Restaurant(props) {
  const typelist = {
    menus: {
      title: "Menus",
      list: [
        {
          name: "Pour 1",
          description: "Hamburger + Accompagnement + Boisson",
          content: ["meals", "sides", "drinks"],
          price: 15.3,
        },
        {
          name: "Pour 2",
          description: "2 Hamburgers + 2 Accompagnements + 2 Boissons",
          content: ["meals", "meals", "sides", "sides", "drinks", "drinks"],
          price: 25.0,
        },
      ],
    },
    meals: {
      title: "Hamburgers",
      list: [
        {
          name: "Whooper",
          description:
            "Pain spécial aux éclats de bacon, spécialité panée au poulet, salade, bacon, fromage fondu goût bacon au poivre, oignons préparés et frits, sauce. ",
          price: 10.0,
          img: "https://cms.burgerking.be/uploads/medium_WHOPPER_e376bad8ec.png",
        },
        {
          name: "CBO",
          description:
            "Pain spécial aux éclats de bacon, spécialité panée au poulet, salade, bacon, fromage fondu goût bacon au poivre, oignons préparés et frits, sauce. ",
          price: 11.0,
          img: "https://cms.burgerking.be/uploads/medium_WHOPPER_e376bad8ec.png",
        },
      ],
    },
    sides: {
      title: "Accompagnements",
      list: [
        {
          name: "Frites",
          description:
            "Pommes de terres finement coupées frites à l'huile de graisse animale",
          price: 4.0,
        },
        {
          name: "Potatoes",
          description:
            "Pommes de terres grossièrement coupées frites à l'huile de graisse animale",
          price: 5.0,
        },
      ],
    },
    drinks: {
      title: "Boissons",
      list: [
        {
          name: "Ice Tea",
          description: "Thé Glacé à la pêche ",
          price: 1.0,
        },
        {
          name: "Eau",
          description: "Eau Volvic ",
          price: 0.8,
        },
        {
          name: "Limonade",
          description: "Citron pressé sucré au miel",
          price: 1.0,
        },
      ],
    },
  };

  const useStyles = makeStyles({
    textMain: {
      color: theme.palette.primary.dark,
      [theme.breakpoints.down("sm")]: {
        fontSize: "30px !important",
      },
    },
  });

  const classes = useStyles();

  const [panierList, setPanierList] = React.useState([]);

  const addFunc = (data) => {
    setPanierList([...panierList, data]);
  };

  const removeFunc = (data) => {
    const index = panierList.findIndex((object) => {
      return object.name === data.name;
    });
    if (index > -1) {
      setPanierList(
        panierList.filter(function (value, i) {
          return i !== index;
        })
      );
    }
  };

  React.useEffect(() => {
  }, [panierList])
  

  return (
    <>
      <Box
        sx={{
          py: theme.spacing(2),
          px: theme.spacing(2),
          backgroundColor: "#758BFD",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            alignItems: "space-between",
            justifyContent: "space-between",
          }}
        >
          <Link href="/">
            <Fab
              size="medium"
              sx={{
                backgroundColor: "primary.dark",
                color: "white",
                mb: theme.spacing(0),
              }}
            >
              <ArrowForwardIcon
                fontSize="large"
                sx={{ transform: "rotate(-180deg)" }}
              />
            </Fab>
          </Link>
          <Typography variant="h4" component="p" sx={{ color: "white" }}>
            Burger King
          </Typography>
        </Container>
      </Box>

      <Container
        maxWidth="xl"
        sx={{
          height: "40vh",
          backgroundImage: `url(https://duyt4h9nfnj50.cloudfront.net/resized/3e260a8bcb621bdd034a9a98ff22aa6b-w2880-cb.jpg)`,
          backgroundSize: "100%",
          backgroundPosition: "center",
        }}
      />
      <Container maxWidth="xl" sx={{ my: theme.spacing(2) }}>
        {Object.keys(typelist).map(function (key, value) {
          return (
            <Link href={"#" + typelist[key]["title"]}>
              <Chip
                label={typelist[key]["title"]}
                clickable
                sx={{
                  mr: theme.spacing(1),
                  mt: theme.spacing(1),
                  color: "white",
                  backgroundColor: "secondary.main",
                  boxShadow: 10,
                  fontSize: "2vh",
                }}
              />
            </Link>
          );
        })}
      </Container>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          component="p"
          sx={{ color: "primary.dark" }}
          id="Menus"
        >
          Menus
        </Typography>

        {typelist.menus.list.map((menu) => {
          return <Menu {...menu} addFunc={addFunc} list={typelist} />;
        })}

        {Object.keys(typelist).map(function (key, value) {
          if (key !== "menus")
            return (
              <>
                <Typography
                  variant="h4"
                  component="p"
                  id={typelist[key]["title"]}
                  className={classes.textMain}
                >
                  {typelist[key]["title"]}
                </Typography>

                {typelist[key].list.map((produit) => {
                  var quan = panierList.filter(obj => obj.name == produit.name).length
                  return (
                    <Produit
                      {...produit}
                      type={key}
                      addFunc={addFunc}
                      removeFunc={removeFunc}
                      quantity = {quan}
                    />
                  );
                })}
              </>
            );
        })}
      </Container>
      <Panier panier={panierList} removeFunc={removeFunc}/>
    </>
  );
}

export default Restaurant;
