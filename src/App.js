import logo from './logo.svg';
import Home from './Pages/Home'
import './App.css';
import './index.css';
import Routes from './Routes/Routes';
import { useState,useEffect } from 'react';
import axios from 'axios';

function App() {

  const [text,setText] =useState('');

  const fetchData=async()=>{
    const response =await axios.get('/.netlify/functions/hello');
    const textData=response.data;
    setText(textData);

  }

  useEffect(()=>{
     fetchData();
  },[]);


  return (
    <div className="App">

     <Routes/>
     <p>{text}</p>
    </div>
  );
}

export default App;
