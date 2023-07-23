// import logo from './logo.svg';
import './App.css';
import React, { useState}  from "react";
import TextField from "@mui/material/TextField"
import List from "./Components/List"

function App() {
  const [inputText, setInputText] = useState("")
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      <h1>Employee Database Search</h1>
      <div className="search">
        <TextField
        id="outlined-basic"
        onChange={inputHandler}
        variant="outlined"
        fullWidth
        label="Search"
        />
      </div>
      <List input={inputText} />
    
    </div>
  );
}

export default App;
