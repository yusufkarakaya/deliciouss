import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';
import Pages from './pages/Pages';
import Category from './components/Category';
import Search from './components/Search';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Logo to={'/'}>
          <GiKnifeFork />
          <p>Deliciouss</p>
        </Logo>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  margin: 3rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2.2rem;
  gap: 0.6rem;
  text-decoration: none;
  color: black;

  p {
    font-size: 1.5rem;
  }
  a {
    text-decoration: none;
  }
`;

export default App;
