import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//import {Switch} from "react-router";
import Nav from './components/layouts/Nav';
import Footer from './components/layouts/Footer';
import HomePage from './pages/HomePage';
import ContactoPage from './pages/ContactoPage';
import BlogPage from './pages/BlogPage';
import VermasPage from "./pages/VermasPage";

function App() {
  return (    
       <div>    
         <Nav/>
         <Routes>   
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/Hazlotú" exact element={<BlogPage/>} />
          <Route path="/Contacto" exact element={<ContactoPage/>} />
          <Route path="/Vermas" exact element={<VermasPage/>} />
        </Routes>
        <Footer/>
      </div> 
  );
}

export default App;
