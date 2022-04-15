import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Searched() {
  const [searched, setSearched] = useState([]);
  let params = useParams();

  const getSearched = async (search) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${search}`
    );
    const data = await api.json();
    setSearched(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searched.map((item) => {
        return (
          <div>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  margin: 3rem 0rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;

  img {
    border-radius: 2rem;
  }
  p {
    text-align: center;
  }
`;

export default Searched;
