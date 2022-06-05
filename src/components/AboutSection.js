import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { PText } from './PText';
import { SectionTitle } from './SectionTitle';
import imgAbout from '../assets/images/about11.png';

const AboutSectionStyles = styled.div`
  .container {
    margin-top: 15rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .sectionTitleClass {
      text-align: left;
    }
    .para {
      margin: 2rem 0;
    }
    .about_buttons {
      display: flex;
      gap: 2rem;
      align-items: center;
      justify-content: flex-start;
    }
    .right__section {
      margin-left: 3rem;
      img {
        border-top: 2px solid var(--gray-1);
        border-left: 2px solid var(--gray-1);
        border-radius: 5rem;
        height: 500px;
        width: 100%;
        max-width: 350px;
        object-position: 50% 0;
        float: right;
        overflow: hidden;
        transform: rotate(0deg);
      }
      img:hover {
        transform: rotate(360deg);
        transition: all 1000ms ease;
      }
    }
  }
  .left__section,
  .right__section {
    flex: 1;
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      .sectionTitleClass {
        text-align: center;
      }
      .para {
        margin: 2rem auto;
      }
      .about_buttons {
        flex-direction: column;
        .btn-wrapper,
        a {
          width: 100%;
          text-align: center;
        }
      }
      .right__section {
        margin-left: 0;
        margin-top: 3rem;
        img {
          border-top: 2px solid var(--gray-1);
          border-left: 2px solid var(--gray-1);
          border-radius: 5rem;
          height: 400px;
        }
      }
    }
  }
`;

export const AboutSection = () => (
  <AboutSectionStyles>
    <div className="container">
      <div className="left__section">
        <SectionTitle heading="ABOUT ME" subHeading="let me introduce myself" />
        <PText>
          I am a frontend developer from New Delhi, India. I create professional
          websites.I have 3 years of experience in frontend development.
        </PText>
        <div className="about_buttons">
          <Button btnText="Works" btnLink="/projects" />
          <Button btnText="Read More" btnLink="/about" outline />
        </div>
      </div>
      <div className="right__section">
        <img src={imgAbout} alt="" />
      </div>
    </div>
  </AboutSectionStyles>
);
