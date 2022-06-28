import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "@mui/material/Link";
import { makeStyles } from "@mui/styles";
import theme from "../Theme/Light";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LogoutIcon from "@mui/icons-material/Logout";
import ListAltIcon from "@mui/icons-material/ListAlt";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import BarChartIcon from '@mui/icons-material/BarChart';
import SourceIcon from '@mui/icons-material/Source';
import logo from "../Images/logo.png";
import API from "../API/API";

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

function Header(props) {
  const useStyles = makeStyles({
    hover: {
      transition: "0.2s",
      "&:hover": {
        color: theme.palette.secondary.main,
      },
    },
  });

  const classes = useStyles();
  const [state, setState] = React.useState(false);
  const classAPI = new API();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  const disconnect = () => {
    classAPI.disconnect();
    window.location.replace("/");
  };

  const list = (
    <List
      sx={{ flexDirection: "column", display: "flex", px: theme.spacing(3) }}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {localStorage.getItem("login") === "true" ? (
        <>
          <Link
            href="/compte"
            sx={{ textDecoration: "none", color: " inherit" }}
            className={classes.hover}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <AccountCircleIcon />
              </ListItemButton>
              <ListItemText>Mon Compte</ListItemText>
            </ListItem>
          </Link>

          {localStorage.getItem("role") === "role_client" ? (
            <Link
              href="/historique"
              sx={{ textDecoration: "none", color: " inherit" }}
              className={classes.hover}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <FactCheckIcon />
                </ListItemButton>
                <ListItemText>Historique de Commandes</ListItemText>
              </ListItem>
            </Link>
          ) : (
            ""
          )}
          {localStorage.getItem("role") === "role_livreur" ? (
            <Link
              href="/livreur/commandes"
              sx={{ textDecoration: "none", color: " inherit" }}
              className={classes.hover}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListAltIcon />
                </ListItemButton>
                <ListItemText>Commandes à Livrer</ListItemText>
              </ListItem>
            </Link>
          ) : (
            ""
          )}


          {localStorage.getItem("role") === "role_restaurateur" ? (
            <Link
              href="/restaurateur/monrestaurant"
              sx={{ textDecoration: "none", color: " inherit" }}
              className={classes.hover}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <StorefrontIcon />
                </ListItemButton>
                <ListItemText>Mon Restaurant</ListItemText>
              </ListItem>
            </Link>
          ) : (
            ""
          )}
          {localStorage.getItem("role") === "role_restaurateur" ? (
            <Link
              href="/restaurateur/statsventes"
              sx={{ textDecoration: "none", color: " inherit" }}
              className={classes.hover}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <BarChartIcon />
                </ListItemButton>
                <ListItemText>Statistiques des ventes</ListItemText>
              </ListItem>
            </Link>
          ) : (
            ""
          )}
          {localStorage.getItem("role") === "role_technique" ? (
            <Link
              href="/technique/logs"
              sx={{ textDecoration: "none", color: " inherit" }}
              className={classes.hover}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <EqualizerIcon />
                </ListItemButton>
                <ListItemText>Statistiques et Logs</ListItemText>
              </ListItem>
            </Link>
          ) : (
            ""
          )}
           {localStorage.getItem("role") === "role_commercial" ? (
            <Link
              href="/commercial/statsapp"
              sx={{ textDecoration: "none", color: " inherit" }}
              className={classes.hover}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <EqualizerIcon />
                </ListItemButton>
                <ListItemText>Statistiques de l'application</ListItemText>
              </ListItem>
            </Link>
          ) : (
            ""
          )}
          {localStorage.getItem("role") === "role_dev" ? (
            <Link
              href="/developpeurtiers/gestioncomposant/"
              sx={{ textDecoration: "none", color: " inherit" }}
              className={classes.hover}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <SourceIcon />
                </ListItemButton>
                <ListItemText>Gestion des composants</ListItemText>
              </ListItem>
            </Link>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}

      {localStorage.getItem("login") === "true" ? (
        <Link
          sx={{ textDecoration: "none", color: " inherit" }}
          className={classes.hover}
          onClick={disconnect}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <LogoutIcon />
            </ListItemButton>
            <ListItemText>Se Déconnecter</ListItemText>
          </ListItem>{" "}
        </Link>
      ) : (
        <Link
          href="/connexion"
          sx={{ textDecoration: "none", color: " inherit" }}
          className={classes.hover}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <LogoutIcon />
            </ListItemButton>
            <ListItemText>Se Connecter</ListItemText>
          </ListItem>
        </Link>
      )}
    </List>
  );
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "primary.dark",
            textShadow: "0px 4px 4px black",
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, position: "absolute" }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h4"
              component="h1"
              align="center"
              sx={{ flexGrow: 1 }}
            >
              <Link
                href="/"
                underline="none"
                color="inherit"
                className={classes.hover}
              >
                GetFast
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={state} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </>
  );
}

export default Header;
