import React from 'react';
import styled from 'styled-components';

const StyleTitle = styled.div`
  text-align: center;
  p {
    font-size: 2rem;
    font-family: 'RobotoMono Regular';
  }
  h2 {
    font-size: 6rem;
    font-family: 'Montserrat Bold';
    margin-top: 0.5rem;
  }
  @media only screen and (max-width: 768px) {
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;

export const SectionTitle = ({
  subHeading = 'This Is SubHeading',
  heading = 'This Is Heading',
}) => (
  <StyleTitle className="sectionTitleClass">
    <p>{subHeading}</p>
    <h2>{heading}</h2>
  </StyleTitle>
);
