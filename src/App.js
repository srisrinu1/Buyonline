import logo from './logo.svg';
import Home from './Pages/Home'
import './App.css';
import './index.css';
import Routes from './Routes/Routes';
import { useState,useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import axios from 'axios';

function App() {

  const [text,setText] =useState('');
  const {user}= useAuth0();
  console.log(user);



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

    </div>
  );
}

export default App;
