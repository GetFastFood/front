import Typography from "@mui/material/Typography";
import theme from "../Theme/Light.jsx";
import { Grid } from "@mui/material";

function BlocCommande(props) {
  return (
    <Grid sx={{backgroundColor: "primary.light", '&:hover': {
      backgroundColor: 'primary.main',
      opacity: 0.8,}, px: theme.spacing(3), py: theme.spacing(1), boxShadow: 7,borderRadius: "10px", my: theme.spacing(2) }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4" component="p" sx={{color :"secondary.main"}}>
            {props.nom}
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{  display: "flex", alignContent: "center", flexWrap: "wrap"}}>
          <Typography variant="h6" component="p" sx={{ fontSize :"16px", color :"primary.dark"}}>{props.localisation}</Typography>
        </Grid>
      </Grid>
      <Grid sx={{ display: "flex" }}>
        <Grid container>
          <Grid item xs={6}>
            {props.articles.map((article) => (
              <Typography sx={{ color :"white"}}>{article.nom}</Typography>
            ))}
          </Grid>
          <Grid item xs={6}>
            {props.articles.map((article) => (
              <Typography sx={{color : "white"}}>
                {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "EUR",
                }).format(article.prix)}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{color :"primary.dark"}}>{props.date}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{color : "primary.dark"}}>{props.status}</Typography>
          </Grid>
        </Grid>
      </Grid>
      </Grid>
 );
}

export default BlocCommande;
