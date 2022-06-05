import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { PText } from './PText';

const ContactBannerStyles = styled.div`
  margin: 15rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export const ContactBanner = () => (
  <ContactBannerStyles>
    <div className="container">
      <div className="contactBanner__wrapper">
        <PText>
          Got a question or proposal, or just want to say hello? Go ahead.
        </PText>
        <h3 className="contactBanner__heading">Send me a message!</h3>
        <Button btnText="Contact Now" btnLink="/contact" />
      </div>
    </div>
  </ContactBannerStyles>
);
