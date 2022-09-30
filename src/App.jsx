import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './style.css';

import Experiences from './Pages/Experiences';
import HomePage from './Pages/HomePage';
import ProgrammingSkill from './Pages/ProgrammingSkill';
import Showcase from './Pages/Showcase';
import SidebarMain from './Pages/SidebarMain';
const Div = styled.div`
  font-family: 'Source Code Pro', monospace;
  display: flex;
`;

function App() {
  return (
    <Div>
      <BrowserRouter basename='/'>
        <SidebarMain />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route
            exact
            path='/programmingskill'
            element={<ProgrammingSkill />}
          />
          <Route exact path='/experiences' element={<Experiences />} />
          <Route exact path='/showcase' element={<Showcase />} />
        </Routes>
      </BrowserRouter>
    </Div>
  );
}

export default App;
