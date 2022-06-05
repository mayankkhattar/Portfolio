import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineProject,
} from 'react-icons/ai';

import styled from 'styled-components';

const StyleNav = styled.div`
  background: rgba(0, 0, 0, 0.3);
  width: max-content;
  padding: 0.5rem 2rem;
  z-index: 100;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2%;
  display: flex;
  gap: 2.2rem;
  border-radius: 3rem;
  backdrop-filter: blur(15px);
  a {
    background: transparent;
    padding: 1rem;
    border-radius: 50%;
    display: flex;
    font-size: 1.1rem;
  }
  a:hover {
    background: rgba(0, 0, 0, 0.2);
  }
  a.active {
    background: rgba(0, 0, 0, 0.6);
  }
  svg {
    width: 3rem;
  }
  AiOutlineHome {
  }
  @media only screen and (max-width: 768px) {
    bottom: 7%;
    svg {
      width: 2rem;
    }
  }
`;

export const NavMenu2 = () => (
  <StyleNav>
    <NavLink to="/" exact>
      <AiOutlineHome />
    </NavLink>
    <NavLink to="/about">
      <AiOutlineUser />
    </NavLink>
    <NavLink to="/projects">
      <AiOutlineProject />
    </NavLink>
    <NavLink to="/contact">
      <AiOutlineMail />
    </NavLink>
  </StyleNav>
);
