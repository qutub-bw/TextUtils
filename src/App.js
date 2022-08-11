
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Event from './components/Event';
import React, {useState} from 'react'
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
const [mode, setMode] = useState('light');
const [msg, setmsg] = useState(null);

const showAlert = (a)=>{
  setmsg(a);
  setTimeout(() => {
    setmsg(null);
  }, 1500);
}
const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#121212';
    showAlert('Dark mode enabled Succesfully');
    document.title = 'TextUtils - Dark';
    
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert('Light mode enabled Succesfully');
    document.title = 'TextUtils - Light';
  
  }
}

  return (
    
     <BrowserRouter>
     <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Event msg={msg}/>
    <Routes>
      <Route path="/" element={<TextForm heading ="Enter the text to analyze Below" mode={mode} showAlert={showAlert}/>}/>
       
       
          <Route path="/about" element={<About/>} />
         
    </Routes>
  </BrowserRouter>
 
    
  );
}

export default App;
