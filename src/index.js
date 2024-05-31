import React from 'react';
import ReactDOM from 'react-dom';
import './css/normalize.css';
import './css/style.css';
import ContactForm from './ContactForm.jsx';

ReactDOM.render(
  <React.StrictMode>
    <ContactForm />
  </React.StrictMode>,
  document.getElementById('root')
);