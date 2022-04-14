import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Cuisine() {
  let params = useParams();
  const [cuisine, setCuisine] = useState([]);

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  const getCuisine = async (type) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${type}`
    );
    const data = await api.json();
    setCuisine(data.results);
    console.log(data.results);
  };

  return <div>Cuisine</div>;
}

export default Cuisine;
