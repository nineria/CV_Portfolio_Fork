// import styled from "styled-components"
import '../style.css';
// import { motion } from "framer-motion";
// import { Switch, Route } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

import {
  Logo,
  Logo_content,
  Logo_name,
  Sidebar,
  Sidebar_li,
  Sidebar_ul,
  Side_a,
} from '../Interface/Sidebar';

function SidebarMain() {
  const navigate = useNavigate();
  return (
    <Sidebar>
      <Logo_content>
        <Logo>
          <i className='bx bxs-cat'></i>
          <Logo_name>PANKORN.WANG</Logo_name>
        </Logo>
      </Logo_content>
      <Sidebar_ul>
        <Sidebar_li onClick={() => navigate('/')}>
          <Side_a as={Link}>
            <i className='bx bx-spa'></i>
            <span>Home Page</span>
          </Side_a>
        </Sidebar_li>
        {/* Space */}

        {/* Space */}
        <Sidebar_li onClick={() => navigate('/programmingskill')}>
          <Side_a as={Link}>
            <i className='bx bx-spa'></i>
            <span>Skills</span>
          </Side_a>
        </Sidebar_li>
        {/* Space */}
        <Sidebar_li onClick={() => navigate('/experiences')}>
          <Side_a as={Link}>
            <i className='bx bx-spa'></i>
            <span>Experiences</span>
          </Side_a>
        </Sidebar_li>
        {/* Space */}
        <Sidebar_li onClick={() => navigate('/bookshelf')}>
          <Side_a as={Link}>
            <i className='bx bx-spa'></i>
            <span>Bookshelf</span>
          </Side_a>
        </Sidebar_li>
        {/* Space */}
        <Sidebar_li onClick={() => navigate('/trading')}>
          <Side_a as={Link}>
            <i className='bx bx-spa'></i>
            <span>Trading</span>
          </Side_a>
        </Sidebar_li>
        {/* Space */}
        <Sidebar_li onClick={() => navigate('/showcase')}>
          <Side_a as={Link}>
            <i className='bx bx-spa'></i>
            <span>Showcase</span>
          </Side_a>
        </Sidebar_li>
        {/* Space */}
        <Sidebar_li>
          <Side_a href='#'>
            <i className='bx bx-spa'></i>
            <span>GitHub & LinkedIn</span>
          </Side_a>
        </Sidebar_li>
        {/* Space */}
      </Sidebar_ul>
      {/* <Profile_content>
                <Profile>
                    <Profile_details>
                        <img className='imgs' src="https://cdn.oneesports.co.th/cdn-data/sites/3/2022/03/Valorant_RetakeEpisode2CinematicViperScreenshot-1024x576-2.jpg" alt="" />
                        <name_job>
                            <Name>Looking for internship</Name>
                            <Job>Front-End Developer.</Job>
                        </name_job>
                    </Profile_details>
                </Profile>
            </Profile_content> */}
    </Sidebar>
  );
}

export default SidebarMain;
