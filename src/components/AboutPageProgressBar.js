import React from 'react';
import styled from 'styled-components';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

const AboutPageProgressBarStyle = styled.div`
  padding-top: 15rem;
  .heading {
    font-size: 3.6rem;
  }
  .skill__bar {
    margin-top: 6rem;
  }
  .react-sweet-progress {
    /* height: 10px; */
    width: 60%;
    position: absolute;
    left: 26rem;
    .react-sweet-progress-symbol {
      margin-left: 1rem;
      font-size: 2rem;
      color: var(--gray-1);
    }
  }
  .bar {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 5rem;
    position: relative;
  }
  @media only screen and (max-width: 768px) {
    .bar {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    .react-sweet-progress {
      position: initial;
      width: 100%;
    }
  }
`;

export const AboutPageProgressBar = ({ progressBarItems }) => {
  const progressBarDiv = Object.keys(progressBarItems).map(
    (progressBarItem) => (
      <div key={progressBarItem} className="bar">
        <div className="info">
          <h1>{progressBarItem}</h1>
        </div>
        <Progress percent={progressBarItems[progressBarItem]} />
      </div>
    )
  );
  return (
    <AboutPageProgressBarStyle>
      <div className="container">
        <h1 className="heading">MY SKILLS</h1>
        <div className="skill__bar">{progressBarDiv}</div>
      </div>
    </AboutPageProgressBarStyle>
  );
};
