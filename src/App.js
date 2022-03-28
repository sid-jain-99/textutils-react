
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
//import About from './components/About.js';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import { BrowserRouter, Route, Routes } from 'react-router-dom'; ---React router code



function App() {
  const [mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const displayAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
       setTimeout(() => {
         setAlert(null);
       }, 2000); 
      }
  

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#03203C';
      document.title = 'TextUtils- Dark mode'
      displayAlert('Dark mode enabled.', 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils- Light mode'
      displayAlert('Light mode enabled.', 'success');
    }
  }
  /* React Router Code------
  return (
    <>
    <!-- -->
    <BrowserRouter>
      <Navbar title="TextUtils" mode ={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      
        <Routes>
          <Route exact path="/" element={<TextForm heading = "Enter your text to analyse" mode ={mode} displayAlert = {displayAlert}/>} />
          <Route excat path="about" element={<About />} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  ); -----------React Router Code*/
  return (
    <>
      <Navbar title="TextUtils" mode ={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>

      <div className="container my-3">
        <TextForm heading = "Enter your text to analyse" mode ={mode} displayAlert = {displayAlert}/>
      </div>


    </>
    
  );
}

export default App;
