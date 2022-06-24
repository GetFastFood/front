import { Button, Container, Grid, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import API from "../../API/API";
import Loading from "../../Components/Loading";
import { Chart, Series } from "devextreme-react/chart";

function StatistiquesApplication(props) {
  const classAPI = new API();
  const [commandes, setCommandes] = React.useState([]);
  const [user, setUser] = React.useState([]);
  const [loaded, setLoaded] = React.useState(false);
  const countUser = {};
  const ventesJour = [];
  var arrayVente = [];
  var objVente = {};
  React.useEffect(() => {
    classAPI.getUsers().then(function (response) {
      setUser(response);
    });
    classAPI.getCommandes().then(function (response) {
      setCommandes(response);
      setLoaded(true);
    });
  }, []);

  React.useEffect(() => {
    if (loaded) {
      user.forEach((element) => console.log());
    }
  }, [user]);

  React.useEffect(() => {
    if (loaded) {
      commandes.forEach((element) => console.log());
    }
  }, [commandes]);

  for (const element of user) {
    if (countUser[element.role]) {
      countUser[element.role] += 1;
    } else {
      countUser[element.role] = 1;
    }
  }
  
  if (loaded) {
    for (const element of commandes) {
      ventesJour.push({
        date: formatDate(element.created),
        nbArticle: element.article.length,
      });
    }

    ventesJour.map((vente) => {
      objVente[vente.date] == undefined
        ? (objVente[vente.date] = vente.nbArticle)
        : (objVente[vente.date] = objVente[vente.date] + vente.nbArticle);
    });
  
    Object.keys(objVente).map((key) => {
      arrayVente = [...arrayVente, { date: key, nbArticle: objVente[key] }];
    });
  
    arrayVente.sort((a, b) => {
      let da = new Date(a.date),
        db = new Date(b.date);
      return da - db;
    });
   
    function formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    }
    console.log(arrayVente)
  }

  return !loaded ? (
    <Loading />
  ) : (
    <Container>
      <Typography>
        Il y {user.length} utilisateur(s) sur l'application{" "}
      </Typography>
      {Object.keys(countUser).map((key) => {
        return (
          <Typography>
            {countUser[key]} utilisateur(s) avec le {key}
          </Typography>
        );
      })}
      <Chart id="chart" dataSource={arrayVente}>
        <Series
          valueField="nbArticle"
          argumentField="date"
          name="Evolution des Ventes"
          type="bar"
          color="#FF961F"
        />
      </Chart>
    </Container>
  );
}

export default StatistiquesApplication;
