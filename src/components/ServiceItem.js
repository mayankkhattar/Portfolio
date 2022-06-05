import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import { PText } from './PText';

const StyleServiceItem = styled.div`
  margin-top: 0rem;
  text-align: center;
  .serviceItom__icon {
    svg {
      width: 3rem;
    }
  }
  .serviceItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
`;
export const ServiceItem = ({
  icon = <MdDesktopMac />,
  title = 'Pass Title',
  desc = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero obcaecati magnam maiores saepe quam magni deserunt, ipsa ducimus vitae alias?',
}) => (
  <StyleServiceItem>
    <div className="serviceItom__icon">{icon}</div>
    <div className="serviceItem__title">{title}</div>
    <PText>{desc}</PText>
  </StyleServiceItem>
);
