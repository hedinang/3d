import React, { Suspense, useEffect, useState } from 'react';
import { MobileNavbar, DesktopNavbar } from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ThreeD from './components/pages/ThreeD';
import Ar from './components/pages/Ar';
// import Forge from './components/pages/Forge';

let Navbar = (props) => {
  useEffect(() => {

  }, props.mobile)
  switch (props.mobile) {
    case true:
      return <MobileNavbar />
    case false:
      return <DesktopNavbar />
  }
}

export default function App() {
  let [mobile, setMobile] = useState(false)
  const breakpoint = 950

  window.addEventListener('resize', () => {
    if (window.innerWidth > breakpoint)
      setMobile(false)
    else setMobile(true)
  })
  return (
    <Router>
      <Navbar mobile={mobile} />
      <Suspense fallback={null}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/product' component={ThreeD} />
          <Route path='/ar' component={Ar} />
          {/* <Route path='/forge' component={Forge} /> */}
        </Switch>
      </Suspense>
    </Router>
  )
}