import {
  BottomNavigation,
  Grid,
  Box,
  Divider,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogTitle,
  TextField,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import * as React from "react";
import theme from "../Theme/Light";
import { makeStyles } from "@mui/styles";

function Panier(props) {
  const [total, setTotal] = React.useState(0);

  const [open, setOpen] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
  const [codePromoValid, setCodePromoValid] = React.useState("");
  const [codePromoUsed, setCodePromoUsed] = React.useState(false)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const remove = (data) => {
    props.removeFunc(data);
  };

  const valid = () => {
    setOpen(false);
    console.log({ content: props.panier, total: total.toFixed(2) });
  };

  const codePromoCheck = (e) => {
    if (e.target.value == "CODE1" && !codePromoUsed) {
      setCodePromoUsed("CODE1")
    } else if (!codePromoUsed){
      setCodePromoValid("Le code n'est pas valide");
    } else {
      setCodePromoValid("Code Promo déjà utilisé")
    }
  };

  React.useEffect(() => {
    var t = 0;
    props.panier.forEach((element) => {
      t = t + element.price;
    });
    setTotal(t);

    props.panier.length > 0 ? setDisabled(false) : setDisabled(true);
  }, [props.panier]);


  React.useEffect(() => {
    setTotal(total * 0.75);
  }, [codePromoUsed])
  
  const useStyles = makeStyles({
    price: {
      color: theme.palette.primary.main,
      fontSize: "10px",
    },
    description: {
      color: theme.palette.primary.light,
      fontSize: "10px",
    },
  });

  const classes = useStyles();
  return (
    <>
      <Box
        className="Tracker"
        sx={{ position: "fixed", bottom: 0, width: "100%", zIndex: "tooltip" }}
      >
        <BottomNavigation sx={{ backgroundColor: "primary.dark" }}>
          <Container
            maxWidth="xl"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="h3" sx={{ color: "secondary.main" }}>
              {new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
              }).format(total)}
            </Typography>
            <Button
              variant="contained"
              sx={{
                borderRadius: 8,
                backgroundColor: "secondary.main",
                textTransform: "capitalize",
                height: "70%",
                mt: theme.spacing(1),
              }}
              onClick={handleOpen}
            >
              Commander
              <ArrowForwardIcon />
            </Button>
          </Container>
        </BottomNavigation>
      </Box>

      <Dialog onClose={handleClose} open={open} sx={{ pb: theme.spacing(4) }}>
        <DialogTitle>Récapitulatif de votre commande</DialogTitle>

        <Container>
          {props.panier.map((article) => {
            return (
              <>
                <Typography variant="h6">{article.name}</Typography>
                <Typography className={classes.description}>
                  {Array.isArray(article.description)
                    ? article.description.join(" ")
                    : ""}
                </Typography>
                <Typography className={classes.price}>
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR",
                  }).format(article.price)}
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    py: theme.spacing(0),
                    borderRadius: 8,
                    textTransform: "capitalize",
                    mb: theme.spacing(3),
                  }}
                  onClick={() => remove(article)}
                >
                  Supprimer
                </Button>
              </>
            );
          })}

          <Divider sx={{ my : theme.spacing(2)}} />
          <Typography>Code Promo</Typography>
          <TextField
            onBlur={(e) => codePromoCheck(e)}
            size="small"
            variant="outlined"
          />
          <Typography variant="h6" sx={{ color: "red" }}>
            {codePromoValid}
          </Typography>

          <Divider sx={{ my: theme.spacing(4) }} />
          <Typography variant="h6"> Total :</Typography>
          <Typography variant="h4" sx={{ color: "secondary.main" }}>
            {new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "EUR",
            }).format(total)}
          </Typography>
        </Container>

        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{
              mt: theme.spacing(2),
              borderRadius: 8,
              textTransform: "capitalize",
            }}
          >
            Annuler
          </Button>
          <Button
            onClick={valid}
            disabled={disabled}
            variant="contained"
            sx={{
              mt: theme.spacing(2),
              borderRadius: 8,
              backgroundColor: "secondary.main",
              textTransform: "capitalize",
            }}
          >
            Commander
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Panier;
