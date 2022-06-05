import React from 'react';
import styled from 'styled-components';
import { PText } from './PText';
import MapImg from '../assets/images/map.png';

const MapStyle = styled.div`
  background: url(${MapImg}) no-repeat center / cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    background: var(--deep-dark);
    padding: 2rem;
    border-radius: 12px;
    width: 100%;
    max-width: 250px;
    right: 12%;
    bottom: 15%;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 75% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export const Map = () => (
  <MapStyle>
    <div className="container">
      <div className="map__card">
        <h3 className="map__card__heading">Here is me</h3>
        <PText>New Delhi, India</PText>
        <a
          href="https://www.google.com/maps/place/New+Delhi,+Delhi/@28.6134594,68.2443237,5z/data=!4m5!3m4!1s0x390cfd5b347eb62d:0x52c2b7494e204dce!8m2!3d28.6139391!4d77.2090212"
          target="_blank"
          rel="noreferrer"
          className="map__card__link"
        >
          Open in Google Map
        </a>
      </div>
    </div>
  </MapStyle>
);
