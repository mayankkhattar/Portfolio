import React, { useEffect } from 'react';
import { AboutSection } from '../components/AboutSection';
import { ContactBanner } from '../components/ContactBanner';
import { MySection } from '../components/MySection';
import { ProjectSection } from '../components/ProjectSection';
import { ServiceSection } from '../components/ServiceSection';

export const Home = ({ setProgress }) => {
  useEffect(() => {
    document.title = 'Home | Mayank Khattar';
    window.scrollTo(0, 0);
    setProgress(100);
  }, [setProgress]);
  return (
    <>
      <MySection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <ContactBanner />
    </>
  );
};
