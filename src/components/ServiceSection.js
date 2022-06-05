import React from 'react';
import styled from 'styled-components';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import { SectionTitle } from './SectionTitle';
import { ServiceItem } from './ServiceItem';

const StyleServiceSection = styled.div`
  margin: 15rem 0;
  .serviceItems {
    display: flex;
    justify-content: space-between;
    gap: 10rem;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .serviceItems {
      flex-direction: column;
      gap: 5rem;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
    }
  }
`;
export const ServiceSection = () => (
  <StyleServiceSection>
    <div className="container">
      <SectionTitle subHeading="what i will do for you" heading="SERVICES" />
      <div className="serviceItems">
        <ServiceItem
          icon={<MdCode />}
          title="Web Dev"
          desc="I'm more front end focused and love to work with Reactjs as well as pure HTML, CSS."
        />
        <ServiceItem
          icon={<MdDesktopMac />}
          title="Web Design"
          desc="I also do ui/ux design for the website that helps website to get a unique look."
        />
        <ServiceItem
          icon={<MdPhonelinkSetup />}
          title="App Dev"
          desc="I develop mobile application. I create mobile app with high performance."
        />
      </div>
    </div>
  </StyleServiceSection>
);
