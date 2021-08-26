import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CurrentView from './components/CurrentView'
import SelectView from './components/SelectView';
import ResultView from './components/ResultView';

function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/current">
          <CurrentView />
        </Route>
        <Route path="/history/select">
          <SelectView />
        </Route>
        <Route path="/history/result">
          <ResultView />
        </Route>
        <Route path="/about">
          {/* template for about me */}
          <div className='text-center space-y-3'>
            <p className='text-2xl font-semibold'>About me</p>
            <p className='text-xl'>Tanat Tangun 630610737</p>
          </div>
        </Route>
        <Route path="/">
          <CurrentView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
