import { BottomNavigation, Grid, Box, Divider, Container } from "@mui/material";
import * as React from "react";
import HomeIcon from "@mui/icons-material/Home";
import StorefrontIcon from '@mui/icons-material/Storefront';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

function Tracker(props) {
  return (
    <Box className="Tracker" sx={{position: "fixed", bottom : 0, width : "100%",zIndex: 'tooltip'}}>
      <BottomNavigation  sx={{backgroundColor: 'primary.dark'}} >
        <Container maxWidth="lg" sx={{alignItems:"center",justifyContent:"space-between", display: 'flex'}}>
          
                <StorefrontIcon fontSize = "large" sx={{color:"white"}}/>


                <Box sx={{backgroundColor:"white", width:"800px", height :"3px"}}/>

                <DirectionsBikeIcon fontSize = "large" sx={{color:"white"}}/>

                <DinnerDiningIcon fontSize = "large" sx={{color:"white"}}/>
        </Container>
      </BottomNavigation>
    </Box>
  );
}

export default Tracker;
