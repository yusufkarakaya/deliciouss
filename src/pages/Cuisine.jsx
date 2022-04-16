import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Cuisine() {
  let params = useParams();
  const [cuisine, setCuisine] = useState([]);

  const getCuisine = async (type) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${type}`
    );
    const data = await api.json();
    setCuisine(data.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <Grid>
      {cuisine.map((item) => {
        return (
          <Link to={'/recipe/' + item.id}>
            <div>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
            </div>
          </Link>
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
  a {
    text-decoration: none;
    color: black;
  }

  img {
    border-radius: 2rem;
  }
  p {
    text-align: center;
  }
`;

export default Cuisine;
