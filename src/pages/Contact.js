import React, { useEffect } from 'react';
import { ContactSection } from '../components/ContactSection';
import { Map } from '../components/Map';

export const Contact = ({ setProgress }) => {
  useEffect(() => {
    document.title = 'Contact | Mayank Khattar';
    window.scrollTo(0, 0);
    setProgress(100);
  }, [setProgress]);
  return (
    <div>
      <ContactSection />
      <Map />
    </div>
  );
};
