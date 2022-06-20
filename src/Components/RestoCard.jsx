import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Fab, Link } from "@mui/material";
import theme from '../Theme/Light';
import { Container } from "@mui/system";
import { makeStyles } from "@mui/styles";

function RestoCard(props) {

  const useStyles = makeStyles({
    hover: {
      transition: "0.2s",
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        fontSize : "130%"
      },
    },
  });

  const classes = useStyles();

  return (
    <Card sx={{mt : theme.spacing(2) }}>
      <CardMedia
        component="img"
        height="190"
        image= {props.img}
              />
      <CardContent className = {classes.hover} sx={{ backgroundColor: "primary.light", pt : theme.spacing(1)}}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <Typography
            gutterBottom
            variant="h5"
            component="p"
            align = "left"
            sx={{ color: "primary.dark", fontSize: '129%' }}
          >
            {props.name}
          </Typography>

          <Link href="/restaurant">
          <Fab
            size="small"
            sx={{ backgroundColor: "primary.dark", color: "white", mb : theme.spacing(0) }}
          >
            <ArrowForwardIcon />
          </Fab>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
}

export default RestoCard;
