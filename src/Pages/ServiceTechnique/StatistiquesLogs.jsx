import {
  Button,
  Container,
  Grid,
  Box
} from "@mui/material";
import Typography from "@mui/material/Typography";
import theme from "../../Theme/Light.jsx";

function StatistiquesLogs(props) {
  return (
    <Container>
        <Typography variant="h4"
        component="p"
        sx={{
          color: "primary.dark",
          py: theme.spacing(10),
          textAlign: "center",
        }}>
                Statistiques de performances et Logs
            </Typography>
      <Box sx={{textAlign:"center"}}>
        <Box sx={{backgroundColor: "primary.light", my: theme.spacing(5), py:theme.spacing(2), borderRadius:"10px"}}>
            <Typography sx={{color: "white"}}>
                Vous pouvez télécharger l'historique de connexion ici : 
            </Typography>
          <Button
            sx={{
              borderRadius: 2,
              backgroundColor: "secondary.main",
              size: "large",
              mt: theme.spacing(5),
            }}
            variant="contained"
            href="http://91.236.239.56/api/v1/service/download"
          >
            Téléchargez les Logs
          </Button>
        </Box>
        <Box sx={{backgroundColor: "primary.light", py:theme.spacing(2), borderRadius:"10px"}}>
        <Typography sx={{color: "white"}}>
          Vous pouvez voir les statistiques de performance serveur (performances des serveurs et micro-services) ici : 
            </Typography>
          <Button
            sx={{
              borderRadius: 2,
              backgroundColor: "secondary.main",
              size: "large",
              mt: theme.spacing(5),
              mr: theme.spacing(2),
            }}
            variant="contained"
            href="http://91.236.239.56:3000/d/pMEd7m0Mz/dashboard-des-services?orgId=1"
          >
            Voir les statistiques des services
          </Button>
          <Button
            sx={{
              borderRadius: 2,
              backgroundColor: "secondary.main",
              size: "large",
              mt: theme.spacing(5),
            }}
            variant="contained"
            href="http://91.236.239.56:3000/d/rYdddlPWk/dashboard-serveur?orgId=1&refresh=1m"
          >
            Voir les statistiques du serveur
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default StatistiquesLogs;
