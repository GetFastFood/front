import { BottomNavigation, Grid, Box, Divider, Container } from "@mui/material";
import * as React from "react";
import HomeIcon from "@mui/icons-material/Home";
import StorefrontIcon from "@mui/icons-material/Storefront";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import theme from "../Theme/Light";

function Tracker(props) {
  const steps = ["En Cuisine", "En Route", "A table"];

  return (
    <Box
      className="Tracker"
      sx={{ position: "fixed", bottom: 0, width: "100%", zIndex: "tooltip",  backgroundColor: "primary.dark" }}
    >
      <Container maxWidth = "lg" sx={{pt : theme.spacing(1)}} >
        <Stepper activeStep={props.step} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel >{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Container>
    </Box>
  );
}

export default Tracker;
