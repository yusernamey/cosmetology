import '../styles/styles.css';
import { Switch, BrowserRouter, Route, useLocation } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Register from './components/Register';
import Contact from './components/Contact';
import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation();
  return (
   <>
    <BrowserRouter>
      <div className="inline-navi">
        <Header />
        <Navigation  />
      </div>
      <AnimatePresence  location={location} key={location.key} exitBeforeEnter>
        <Switch>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path='/about'>
           <About />
          </Route>
          <Route exact path='/services'>
           <Services />
          </Route>
          <Route exact path='/register'>
           <Register />
          </Route>
          <Route exact path='/contact'>
           <Contact />
          </Route>
        </Switch>
      </AnimatePresence>  
    </BrowserRouter>
   </>
  );
}

export default App;
