import React from 'react';
import styled from 'styled-components';
import { MdLocalPhone, MdEmail } from 'react-icons/md';
import { ContactInfoItem } from './ContactInfoItem';
import { SectionTitle } from './SectionTitle';
import { ContactForm } from './ContactForm';

const ContactSectionStyle = styled.div`
  margin: 10rem 0;
  .contactSection__wrapper {
    margin-top: 7rem;
    display: flex;
    gap: 5rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    content: ' ';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left,
  .right {
    width: 100%;
    max-width: 500px;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export const ContactSection = () => (
  <ContactSectionStyle>
    <div className="container">
      <SectionTitle subHeading="get in touch" heading="CONTACT" />
      <div className="contactSection__wrapper">
        <div className="left">
          <a href="tel:+7009379611">
            <ContactInfoItem icon={<MdLocalPhone />} text="+7009379611" />
          </a>
          <a href="mailto:mk.contact.29@gmail.com">
            <ContactInfoItem
              icon={<MdEmail />}
              text="mk.contact.29@gmail.com"
            />
          </a>
          <a
            href="https://www.google.com/maps/place/New+Delhi,+Delhi/@28.6134594,68.2443237,5z/data=!4m5!3m4!1s0x390cfd5b347eb62d:0x52c2b7494e204dce!8m2!3d28.6139391!4d77.2090212"
            target="_blank"
            rel="noreferrer"
          >
            <ContactInfoItem text="New Delhi, India" />
          </a>
        </div>
        <div className="right">
          <ContactForm />
        </div>
      </div>
    </div>
  </ContactSectionStyle>
);
