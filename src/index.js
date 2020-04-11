import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./styles/nav.css";
import "./styles/home.css";
import "./styles/evenementsMobilisations.css";
import "./styles/medias.css";
import "./styles/contact.css";
import "./styles/rejoinsNous.css";

import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

