import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react'
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert=(message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
  }

  const toggleMode=()=>{
    if (mode!=='dark'){
      setMode('dark')
      document.body.style.backgroundColor = '#1b2244'
      document.body.style.color = 'white'
      showAlert('DarkMode is on', 'success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert('DarkMode is off', 'success')
    }
  }

  const blackTheme=()=>{
      if (mode!=='black'){
        setMode('black')
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
        showAlert('BlackTheme is applied', 'success')
      }
      else{
        setMode('light')
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
        showAlert('BlackTheme is off', 'success')
      }
      
    }

    const greenTheme=()=>{if (mode!=='green'){
      setMode('green')
      document.body.style.backgroundColor = 'green'
      document.body.style.color = 'white'
      showAlert('GreenTheme is applied', 'success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert('GreenTheme is off', 'success')
    }
    }

    const searchFunctionality=()=>{
      showAlert('Search Functionality is not available right now, stay tuned!!!','success')
    }

    const purpleTheme=()=>{if (mode!=='purple'){
      setMode('purple')
      document.body.style.backgroundColor = 'purple'
      document.body.style.color = 'white'
      showAlert('PurpleTheme is applied', 'success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert('PurpleTheme is off', 'success')
    }
    }

    const aboutPage=()=>{
      showAlert('Scroll Down to see About Page','success')
    }

  

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtilsBlog" aboutText="About TextUtils" toggleMode={toggleMode} mode={mode} blackTheme={blackTheme} greenTheme={greenTheme} purpleTheme={purpleTheme} aboutPage={aboutPage} searchFunctionality={searchFunctionality} />
      <Alert alert={alert} />
      {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/"> */}
          <TextForm heading="Enter Your Text Here to Analyze..." mode={mode} showAlert={showAlert} />
          <br></br>
          <About />
          {/* </Route>
        </Switch> */}
      {/* <TextForm heading="Enter Your Text Here to Analyze..." mode={mode} showAlert={showAlert} /> */}
      {/* <About/> */}
      {/* </Router> */}
      </>
  );
  
}

export default App;
