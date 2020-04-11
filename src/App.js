import React from 'react';
import { Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

// import the views
import Home from "./views/Home";
import EvenementsMobilisations from "./views/EvenementsMobilisations";
import Culture from "./views/Culture";
import Sante from "./views/Sante";
import Medias from "./views/Medias";
import RejoinsNous from "./views/RejoinsNous";
import Contact from "./views/Contact";

// import component (view partials)
import NavMain from "./components/NavMain";


function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/evenements-mobilisations" component={EvenementsMobilisations} />
        <Route path="/culture" component={Culture} />
        <Route path="/sante" component={Sante} />
        <Route path="/medias" component={Medias} />
        <Route path="/rejoins-nous" component={RejoinsNous} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
