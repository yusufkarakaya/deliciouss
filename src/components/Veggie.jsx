import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styled from 'styled-components';

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  const getVeggie = async () => {
    const check = localStorage.getItem('veggie');

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();

      setVeggie(data.recipes);
      localStorage.setItem('veggie', JSON.stringify(data.recipes));
    }
  };

  useEffect(() => {
    getVeggie();
  }, []);

  return (
    <Wrapper>
      <h3>Vegetarian</h3>
      <Splide
        options={{
          perPage: 5,
          gap: '2rem',
          arrows: false,
          pagination: false,
        }}
      >
        {veggie.map((item) => {
          return (
            <SplideSlide key={item.id}>
              <Card key={item.id}>
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
                <Gradient />
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 5rem 0rem;

  h3 {
    margin-bottom: 2rem;
  }
`;

const Card = styled.div`
  border-radius: 2rem;
  position: relative;

  img {
    position: relative;
    width: 100%;
    height: 18rem;
    border-radius: 2rem;
    object-fit: cover;
  }
  p {
    position: absolute;
    bottom: 1.5rem;
    color: white;
    font-weight: 600;
    z-index: 10;
    text-align: center;
  }
`;

const Gradient = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.5)
  );
  z-index: 5;
  border-radius: 2rem;
`;

export default Veggie;
