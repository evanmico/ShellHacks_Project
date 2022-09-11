import './App.css'
import Header from "./Header";
import Cards from "./Cards";
import Footer from "./Footer";
import Login from "./Login";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


export default function App() {
  return (
    <div>
      <HashRouter>
        <Header/>
        <div>
          <Routes>
            <Route path="/" element={<Cards/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </div>
        <Footer/>
      </HashRouter>
    </div>
  );
}



//dickbutt