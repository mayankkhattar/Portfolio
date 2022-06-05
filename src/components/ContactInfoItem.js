import React from 'react';
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';
import { PText } from './PText';

const ContactInfoItemStyle = styled.div`
  background-color: var(--deep-dark);
  display: flex;
  padding: 2rem;
  align-items: center;
  margin-bottom: 2rem;
  border-radius: 8px;
  gap: 2rem;
  overflow: auto;
  .info__icon {
    background-color: var(--gray-2);
    color: var(--white);
    padding: 1.3rem;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    svg {
      width: 3.5rem;
    }
  }
`;

export const ContactInfoItem = ({
  icon = <MdPlace />,
  text = 'this is info',
}) => (
  <ContactInfoItemStyle>
    <div className="info__icon">{icon}</div>
    <div className="info__text">
      <PText>{text}</PText>
    </div>
  </ContactInfoItemStyle>
);
