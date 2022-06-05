import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import projectImg from '../assets/images/coming-soon3.png';

const ProjectItemStyle = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
      object-fit: fill;
    }
  }
  .projectItem__info {
    position: relative;
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
    cursor: pointer;
  }
  .projectItem__info:hover {
    .projectItem__info__overLayer {
      display: flex;
    }
  }

  .projectItem__info__overLayer {
    display: flex;
    position: absolute;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    height: 100%;
    border-radius: 12px;
    left: 0;
    top: 0;
    justify-content: center;
    align-items: center;
    display: none;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export const ProjectItem = ({
  img = projectImg,
  title = 'Project Name',
  desc = 'Write project desc here.',
  link = '#',
  target = '_self',
}) => (
  <ProjectItemStyle>
    <Link to="/projects" className="projectItem__img">
      <img src={img} alt="" />
    </Link>

    <div
      className="projectItem__info"
      onClick={() => window.open(link, target)}
      role="button"
      onKeyDown={() => window.open(link, target)}
      tabIndex={0}
    >
      {title === 'Coming Soon' ? (
        <h3 className="projectItem__title">{title}</h3>
      ) : (
        <>
          <div className="projectItem__info__overLayer">
            <h2>Go to Website</h2>
          </div>
          <h3 className="projectItem__title">{title}</h3>
        </>
      )}
      <p className="projectItem__desc">{desc}</p>
    </div>
  </ProjectItemStyle>
);
