import React from 'react';
import styled from 'styled-components';
import { PText } from './PText';

const AboutPageBottomStyle = styled.div`
  padding-top: 10rem;
  .main__div__heading {
    font-size: 3.6rem;
  }
  .info__contents {
    margin-top: 6rem;
  }
  .info__content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 5rem;
    position: relative;
  }
  .info__items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 38rem;
    padding-bottom: 0.5rem;
  }
  .info__item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
  }
  @media only screen and (max-width: 768px) {
    .info__content {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    .info__items {
      width: 100%;
      position: initial;
      gap: 1rem;
    }
    .info__item {
      width: 100%;
    }
    .main__div__heading {
      font-size: 3rem;
    }
  }
`;

export const AboutPageBottom = ({
  heading = 'Test Heading',
  infoContents = [{ infoTitle1: ['infoItem'] }, { infoTitle2: ['infoItem'] }],
}) => {
  const infoContentsArray = infoContents.map((infoContent) => (
    <div key={Object.entries(infoContent)[0][0]} className="info__content">
      <h1>{Object.entries(infoContent)[0][0]}</h1>
      <div className="info__items">
        {Object.entries(infoContent)[0][1].map((infoItem) => (
          <div key={infoItem} className="info__item">
            <PText>{infoItem}</PText>
          </div>
        ))}
      </div>
    </div>
  ));
  return (
    <AboutPageBottomStyle>
      <div className="container">
        <div className="main__div">
          <h1 className="main__div__heading">{heading}</h1>
          <div className="info__contents">{infoContentsArray}</div>
        </div>
      </div>
    </AboutPageBottomStyle>
  );
};
