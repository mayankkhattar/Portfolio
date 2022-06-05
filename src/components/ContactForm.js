import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

const ContactFormStyle = styled.form`
  width: 100%;
  .form__group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    padding: 1.2rem;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
  button:hover {
    transform: scale(1.1);
  }
`;

export const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('gmail', 'template_cy5qai7', e.target, 'DuJkIRVjrKIIMKsUj')
      .then(
        (result) => {
          console.log(result.text);
          swal({
            title: 'Thanks!',
            text: 'Will get back to you!',
            icon: 'success',
            button: 'Go Back',
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div>
      <ContactFormStyle onSubmit={sendEmail}>
        <div className="form__group">
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form__group">
          <label htmlFor="email">
            Your Email
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form__group">
          <label htmlFor="message">
            Your Message
            <textarea
              type="text"
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.message)}
            />
          </label>
        </div>
        <button type="submit">Shoot</button>
      </ContactFormStyle>
    </div>
  );
};
