import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VerMasPage from "./pages/VerMasPage";
import HazloTuPage from "./pages/HazloTuPage";
import ContactoPage from "./pages/ContactoPage";
import './App.css';
import './styles/components/pages/fuente.css';
function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" exact element={<HomePage/>}/>
        <Route path="/vermas" exact element={<VerMasPage/>}/>
        <Route path="/hazlotu" exact element={<HazloTuPage/>}/>
        <Route path="/contacto" exact element={<ContactoPage/>}/>
         
      </Routes>
      <Footer/>
    </Router>   
  );
}

export default App;
