import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './components/home/App';
import Projects from './components/page/projects';

const AppRouter=()=>(
  <BrowserRouter>
    <div>
      <Route path="/" exact component={App} />
      <Route path="/projects" component={Projects} />
    </div>
  </BrowserRouter>
);

export default AppRouter;
