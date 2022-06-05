import React, { useState, useEffect } from 'react';
import { MdSearch } from 'react-icons/md';
import styled from 'styled-components';
import { ProjectItem } from '../components/ProjectItem';
import { SectionTitle } from '../components/SectionTitle';
import ProjectInfo from '../assets/data/projects';

const ProjectsStyle = styled.div`
  padding: 10rem 0;
  .project__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minMax(450px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .project__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .project__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .project__searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .project__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .project__searchBar,
    .project__searchBar form,
    .project__searchBar input {
      width: 100%;
    }
    .project__allItems {
      grid-template-columns: repeat(auto-fill, minMax(300px, 1fr));
    }
  }
`;

export const Projects = ({ setProgress }) => {
  useEffect(() => {
    document.title = 'Projects | Mayank Khattar';
    window.scrollTo(0, 0);
    setProgress(100);
  }, [setProgress]);

  const [searchText, setSearchText] = useState('');
  const [projectData, setProjectData] = useState(ProjectInfo);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  useEffect(() => {
    if (searchText === '') {
      setProjectData(ProjectInfo);
      return;
    }
    setProjectData(
      ProjectInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  return (
    <ProjectsStyle>
      <div className="container">
        <SectionTitle heading="PROJECTS" subHeading="some of my recent works" />
        <div className="project__searchBar">
          <form>
            <input type="text" value={searchText} placeholder="Search Projects" onChange={handleChange} />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        <div className="project__allItems">
          {projectData.map((project) => (
            <ProjectItem
              key={project.id}
              title={project.name}
              img={project.img}
              desc={project.desc}
              link={project.path}
              target={project.target}
            />
          ))}
        </div>
      </div>
    </ProjectsStyle>
  );
};
