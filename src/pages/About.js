import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { PText } from '../components/PText';
import MyCv from '../assets/files/Mayank_Khattar.pdf';
import AboutImg from '../assets/images/mk_About2.jpg';
import { AboutPageBottom } from '../components/AboutPageBottom';
import {
  educationContent,
  mySkillsContent,
  experiences,
} from '../assets/data/myInfo';
import { AboutPageProgressBar } from '../components/AboutPageProgressBar';
import { ContactBanner } from '../components/ContactBanner';

const AboutStyle = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
    img {
      border: 2px solid var(--gray-1);
      min-height: 430px;
      border-radius: 12px;
    }
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 3rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
  }
`;

export const About = ({ setProgress }) => {
  useEffect(() => {
    document.title = 'About | Mayank Khattar';
    window.scrollTo(0, 0);
    setProgress(100);
  }, [setProgress]);
  return (
    <AboutStyle>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Mayank Khattar</span>
            </p>
            <h2 className="about__heading">A Frontend developer</h2>
            <div className="about__info">
              <PText>
                I am from New Delhi, India ☀️. A place of India's national
                government. I love art and design. I always try to design stuff
                with my unique point of view.I also love to create things that
                can be useful to others.
                <br />
                <br />
                I started coding since i was in high school.I describe myself as
                a passionate developer who loves coding, open source, and the
                web platform ❤️. Aside from my job, I like to create and
                contribute to open source projects. That helps me to learn a ton
                of new stuff, grow as a developer and support other open source
                <br />
                <br />
                My vision is to make the world a better place. Now almost
                everything is becoming better than ever. It is time for us to
                create more good stuff that helps the world to become a better
                place.
              </PText>
            </div>
            <Button btnLink={MyCv} btnText="Download CV" target="_blank" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="AboutImage" />
          </div>
        </div>
        <div className="bottom-section">
          <AboutPageProgressBar
            heading="MY SKILLS"
            progressBarItems={mySkillsContent}
          />
          <AboutPageBottom
            heading="EDUCATION"
            infoContents={educationContent}
          />

          <AboutPageBottom heading="EXPERIENCES" infoContents={experiences} />
        </div>
        <ContactBanner />
      </div>
    </AboutStyle>
  );
};
