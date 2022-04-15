import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [input, setInput] = useState('');
  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);
  };

  return (
    <Wrapper onSubmit={submitHandler}>
      <div>
        <AiOutlineSearch />
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type='text'
          value={input}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  margin: 3rem 0rem;
  display: flex;

  div {
    margin: auto;
    width: 70%;
    text-align: center;
    position: relative;
  }

  input {
    width: 100%;
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
    font-size: 1.3rem;
  }
`;

export default Search;
