import React from 'react';
import styled from 'styled-components';
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import myImage from '../assets/images/mk - original6.jpg';
import { Button } from './Button';
import { PText } from './PText';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import SocialDownArrow from '../assets/images/scroll-down-arrow.svg';
import MyCv from '../assets/files/Mayank_Khattar.pdf';

const MyStyles = styled.div`
  .my {
    height: 90vh;
    min-height: 800px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .my__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .my__name {
      font-size: 7rem;
      font-family: 'Montserrat SemiBold';
      color: var(--white);
      overflow: hidden; /* Ensures the content is not revealed until the animation */
      white-space: nowrap; /* Keeps the content on a single line */
      animation: typing 5s steps(40, end);
    }
  }
  .my__image {
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    height: 600px;
    border: 4px solid var(--gray-1);
    img {
      object-position: 50% 0;
    }
  }
  .my__info {
    margin-top: -18rem;
    p {
      color: var(--white);
    }
  }
  .mySection__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  .my__social,
  .my__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
    .my__social__text {
      ul {
        li {
          margin-bottom: 1rem;
          a {
            display: inline-block;
            letter-spacing: 0.7rem;
            width: 2vw;
            margin-left: 4px;
            /* transform: rotate(-90deg); */
            margin-bottom: 2rem;
          }
        }
      }
    }
  }
  .my__social {
    left: 50px;
  }
  .my__scrollDown {
    img {
      max-height: 70px;
    }
    right: 50px;
  }
  @media only screen and (max-width: 768px) {
    .my {
      min-height: 750px;
      height: 85vh;
    }
    .my__heading {
      font-size: 1.4rem;
      margin-bottom: -2.5rem;
      .my__name {
        font-size: 3.5rem;
      }
    }
    .my__image {
      height: 300px;
    }
    .my__info {
      margin-top: 3rem;
    }
    .my__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .my__social__indicator {
        width: 23px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .my__social__text {
        ul {
          li {
            a {
              /* font-size: 1.2rem; */
              width: 2.2rem;
              margin-bottom: 1rem;
              margin-left: 4px;
            }
          }
        }
      }
    }
    .my__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.2rem;
      }
    }
    .mySection__btn {
      flex-direction: column;
      .btn-wrapper,
      a {
        width: 90%;
        text-align: center;
      }
    }
  }
`;
export const MySection = () => (
  <MyStyles>
    <div className="my">
      <div className="container">
        <h1 className="my__heading">
          <span>Hello, This is</span>
          <span className="my__name">Mayank Khattar</span>
        </h1>
        <div className="my__image">
          <img src={myImage} alt="" />
        </div>
        <div className="my__info">
          <PText>
            "A frontend developer from New Delhi, India. I love to provide new
            web experience for the people"
          </PText>
          <div className="mySection__btn">
            <Button btnLink={MyCv} btnText="Download CV" target="_blank" />
            <Button btnLink="/contact" btnText="Let's Talk" outline />
          </div>
        </div>
        <div className="my__social">
          <div className="my__social__indicator">
            <p>follow</p>
            <img src={SocialMediaArrow} alt="social media arrow" />
          </div>
          <div className="my__social__text">
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/mayank__khattar/"
                  target="_blank"
                  rel="noreferer noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/mayankKhattar_"
                  target="_blank"
                  rel="noreferer noreferrer"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mayank-khattar-427aa0173/"
                  target="_blank"
                  rel="noreferer noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mayankkhattar"
                  target="_blank"
                  rel="noreferer noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="my__scrollDown">
          <p>SCROLL</p>
          <img src={SocialDownArrow} alt="" />
        </div>
      </div>
    </div>
  </MyStyles>
);
