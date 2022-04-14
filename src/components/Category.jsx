import React from 'react';
import { FaHamburger, FaPizzaSlice } from 'react-icons/fa';
import { GiChopsticks, GiBowlOfRice } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Category() {
  return (
    <Wrapper>
      <Link to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </Link>
      <Link to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Link>
      <Link to={'/cuisine/Thai'}>
        <GiBowlOfRice />
        <h4>Thai</h4>
      </Link>
      <Link to={'/cuisine/Japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: center;
  text-align: center;
  gap: 1rem;
`;

const Link = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  &.active {
    background: linear-gradient(to right, #f27712, #e94057);
  }
  h4 {
    color: white;
  }
  svg {
    color: white;
  }
`;

export default Category;
