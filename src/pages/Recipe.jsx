import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Recipe() {
  const [recipe, setRecipe] = useState({});
  const [activeTab, setActiveTab] = useState('Introduction');
  let params = useParams();

  const getRecipe = async (id) => {
    const check = localStorage.getItem('recipe');

    if (check) {
      setRecipe(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const data = await api.json();
      setRecipe(data);
      localStorage.setItem('recipe', JSON.stringify(data));
      console.log(data);
    }
  };

  useEffect(() => {
    getRecipe(params.id);
  }, [params.id]);

  return (
    <Wrapper>
      <div id='title'>
        <h3>{recipe.title}</h3>
      </div>
      <div>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <Buttons key={recipe.id}>
        <button
          onClick={() => {
            setActiveTab('Introduction');
          }}
          className={activeTab === 'Introduction' ? 'active' : ''}
        >
          Introduction
        </button>
        <button
          onClick={() => {
            setActiveTab('Ingredients');
          }}
          className={activeTab === 'Ingredients' ? 'active' : ''}
        >
          Ingredients
        </button>
        <div>
          {activeTab === 'Ingredients' && (
            <ul>
              {recipe.extendedIngredients.map((ingredient) => {
                return <li key={ingredient.id}>{ingredient.original}</li>;
              })}
            </ul>
          )}
          {activeTab === 'Introduction' && (
            <ul>
              <h3 key={recipe.id}>{recipe.summary} </h3>
              <h3 key={recipe.id}> {recipe.instructions}</h3>
            </ul>
          )}
        </div>
      </Buttons>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 3rem 0rem;
  display: grid;
  grid-template-areas:
    'a a a'
    'b c c'
    'b c c';

  .active {
    background: gray;
    color: white;
  }

  #title {
    grid-area: a;
    margin-bottom: 1rem;
  }
  div {
    margin-right: 3rem;
  }
  img {
    border-radius: 0.4rem;
  }
  h3 {
    margin-bottom: 1rem;
  }
`;
const Buttons = styled.div`
  button {
    padding: 1rem 2.2rem;
    border: none;
    cursor: pointer;
    border-radius: 0.2rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.8);
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
`;
export default Recipe;
