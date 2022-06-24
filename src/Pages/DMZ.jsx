import { Typography } from "@mui/material";
import React, { useState } from "react";
import PayPal from "../Components/PayPal";

function App() {
  const [checkout, setCheckOut] = useState("");

  const responseFunction = (response) => {
    console.log(response)
    if (response.payStatus == "OK"){
      setCheckOut("COMMANDE ACCEPTEE")
    }else{
      setCheckOut("ERREUR")
    }
  }

  return (
    <div className="App">
        <PayPal returnFunc = {responseFunction} />
        <Typography>
          {checkout}
        </Typography>
    </div>
  );
}

export default App;
