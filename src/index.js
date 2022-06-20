import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./Pages/Home";
import Restaurant from "./Pages/Restaurant";
import Connexion from "./Pages/Connexion";
import Inscription from "./Pages/Inscription";
import MotDePasse from "./Pages/MotDePasse";
import Historique from "./Pages/Historique";
import Recuperation from "./Pages/Recuperation";
import Commande from "./Pages/Livreur/Commande";
import SuccessPassword from "./Pages/SuccessPassword";
import Livraison from "./Pages/Livreur/Livraison";
import Article from "./Pages/Restaurateur/Article";
import Menu from "./Pages/Restaurateur/Menu";
import ModifierArticle from "./Pages/Restaurateur/ModifierArticle";
import ModifierMenu from "./Pages/Restaurateur/ModifierMenu";
import Header from "./Layout/Header";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./Theme/Light.jsx";
import { Box } from "@mui/material";
import NotFound from "./Pages/NotFound";
import Compte from "./Pages/Compte";
import './Fonts/gt-america-extended-medium.latin-webfont.woff';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<ThemeProvider theme={theme}>
  <BrowserRouter>
    <Header/>
    
    <Box maxwidth sx= {{ my : theme.spacing(8) , px :  theme.spacing(0)}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/motdepasse" element={<MotDePasse />} />
        <Route path="/compte" element={<Compte />} />
        <Route path="/recuperation" element={<Recuperation />} />
        <Route path="/historique" element={<Historique />} />
        <Route path="/commande" element={<Commande />} />
        <Route path="/success" element={<SuccessPassword />} />
        <Route path="/livraison" element={<Livraison />} />
        <Route path="/article" element={<Article />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/modifierarticle" element={<ModifierArticle />} />
        <Route path="/modifiermenu" element={<ModifierMenu />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>

   
    
    
  </BrowserRouter>
</ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
