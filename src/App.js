import React, { useState } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import { Footer } from './components/Footer';
import { NavMenu2 } from './components/NavMenu2';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';

export default function App() {
  const [progress, setProgress] = useState(0);
  return (
    <BrowserRouter>
      <NavMenu2 />
      <LoadingBar
        color="#000000"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        loaderSpeed={1}
        height={5}
      />

      <Switch>
        <Route path="/contact">
          <Contact setProgress={setProgress} />
        </Route>
        <Route path="/projects">
          <Projects setProgress={setProgress} />
        </Route>
        <Route path="/about">
          <About setProgress={setProgress} />
        </Route>
        <Route path="/">
          <Home setProgress={setProgress} />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
