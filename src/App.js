import './App.css';
import Home from './components/Home';
import About from "./routes/about";
import AboutApp from "./routes/about-app"
import AboutAuthor from "./routes/about-author"
import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/about" element={<About/>} />
            <Route path="/about-app" element={<AboutApp/>} />
            <Route path="/about-author" element={<AboutAuthor/>} />
            <Route path="*" element={<div>Oops! Something Went Wrong!</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
