import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Nav from './components/layouts/Nav';
import Footer from './components/layouts/Footer';

import HomePage from './pages/HomePage';
import ContactoPage from './pages/ContactoPage';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <Router>
      <Nav/>
        <Switch>
          <Router path="/" exact component ={HomePage} />
          <Router path="/Hazlo tú" exact component ={BlogPage} />
          <Router path="/Contacto" exact component ={ContactoPage} />
        </Switch>
      <Footer/>
    </Router>
   
  );
}

export default App;
