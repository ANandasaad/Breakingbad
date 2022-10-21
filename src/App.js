import './App.css';

import React from 'react';
import Header from './components/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
const App=()=> {

  const [itmes, setItems]=useState([])
  const [isLoading, setIsLoading] =useState(true)

  useEffect(()=>{
    const fetchItems =async()=>{
      const result=await axios(`https://www.breakingbadapi.com/api/characters`)

      console.log(result.data);
      
    }

    fetchItems();
  },[])
  return (
    <div className="container">
     <Header/>
    </div>
  );
}

export default App;
