import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About'
import Alert from './components/Alert'
import React, { useState } from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom";

function App() {
  
  const [mode, setMode] = useState({
    bgColor: "light",
    textColor: "dark"
  })  
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const [myStyle, setMyStyle] = useState({
    background: "white",
    color: "black"
  })


  const customMode = (e) => {
      if(e.target.classList.contains("btn-danger")) {
        setMode({
          bgColor: "danger",
          textColor:"light"
        })
        document.body.style.background = "#ff003b"
        setMyStyle({
          background: "#ff003b",
          color: "white"
        })
        showAlert("Red mode has been enabled", "success")
      }
      else if(e.target.classList.contains("btn-primary")) {
        setMode({
          bgColor: "primary",
          textColor:"light"
        })
        document.body.style.background = "#050572"
        setMyStyle({
          background: "#050572",
          color: "white"
        })
        showAlert("Blue mode has been enabled", "success")
      }
      else if(e.target.classList.contains("btn-success")) {
        setMode({
          bgColor: "success",
          textColor:"light"
        })
        document.body.style.background = "green"
        setMyStyle({
          background: "green",
          color: "white"
        })
        showAlert("Green mode has been enabled", "success")
      }
      else if(e.target.classList.contains("btn-dark")) {
        setMode({
          bgColor: "dark",
          textColor:"light"
        })
        document.body.style.background = "#030110"
        setMyStyle({
          background: "#030110",
          color: "white"
        })
        showAlert("Dark mode has been enabled", "success")
      }
      else {
        setMode({
          bgColor: "light",
          textColor:"dark"
        })
        document.body.style.background = "white"
        setMyStyle({
          background: "white",
          color: "black"
        })
        showAlert("Light mode has been enabled", "success")
      }
  }
  


  return (
    <>
      <BrowserRouter>
            <Navbar title="TEXTUTILS" about="About" mode={mode} customMode={customMode}/>
            <Alert alert={alert}/>
        <Routes>
            <Route path="/about" element={<About myStyle={myStyle}/>}>
            </Route>
            <Route path="/" 
            element= {
              <TextForm showAlert={showAlert} heading="Textutils - Word Counter, Character Counter, Remove extra spaces" mode={mode} myStyle={myStyle}/>
            }>
            </Route>
        </Routes>
      </BrowserRouter>
    </>    
  );
}

export default App;
