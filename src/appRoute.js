import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/page/Home';
import Projects from './components/page/projects';

const AppRouter=()=>(
  <BrowserRouter>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/projects" component={Projects} />
    </div>
  </BrowserRouter>
);

export default AppRouter;
