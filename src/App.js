import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ThreeD from './components/pages/ThreeD';
export default function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={null}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/product' component={ThreeD} />
        </Switch>
      </Suspense>
    </Router>
  )
}