// Component
import Home from './components/Home';
import Navbar from './components/Navbar';

// Routes
import About from "./routes/about";
import AboutApp from "./routes/about-app"
import AboutAuthor from "./routes/about-author"

// React-Router
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/about/" element={<About/>}>
          <Route path="about-app" element={<AboutApp/>} />
          <Route path="about-author" element={<AboutAuthor/>} />
        </Route>
        <Route path="*" element={<div style={{marginLeft:"300px", paddingTop: "40px", fontSize:"24px"}}>Oops! Something Went Wrong!</div>} />
      </Routes>
    </div>
  );
}

export default App;
