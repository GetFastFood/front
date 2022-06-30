import { Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import PayPal from "../Components/PayPal";
import API from "../API/API";
import { io } from "socket.io-client";

function App() {
 const classAPI = new API()
 const send = () => {
    classAPI.testNotif()
 }

 return (
   <div className="App">
     <Button onClick={send}>Hello</Button>
   </div>
 )

}

export default App;
