import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import styled from 'styled-components';
import { SectionTitle } from './SectionTitle';
import projects from '../assets/data/projects';
import { ProjectItem } from './ProjectItem';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use(Navigation);
SwiperCore.use(Pagination);

const ProjectSectionStyle = styled.div`
  margin: 15rem 0;
  /* max-height: 400px; */
  .projectItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-container {
    padding-top: 8rem;
    padding-bottom: 5rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: var(--deep-dark);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  .swiper-pagination-bullet {
    background: var(--gray-1);
  }
`;

export const ProjectSection = () => (
  <ProjectSectionStyle>
    <div className="container">
      <SectionTitle
        subHeading="some of my react/redux works"
        heading="PROJECTS"
      />
      <div className="projectItems">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectItem
                title={project.name}
                img={project.img}
                desc={project.desc}
                link={project.path}
                target={project.target}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </ProjectSectionStyle>
);
