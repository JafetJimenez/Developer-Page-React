import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import './css/normalize.css';
import './css/style.css';
import ContactForm from './ContactForm.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/" exact component={ContactForm} />
      {/* Agrega más rutas aquí si tienes otros componentes */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);