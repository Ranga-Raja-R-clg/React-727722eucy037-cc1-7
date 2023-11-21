import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <Card>
      <p>{time.toLocaleTimeString()}</p>
    </Card>
  );
}

export default App;
