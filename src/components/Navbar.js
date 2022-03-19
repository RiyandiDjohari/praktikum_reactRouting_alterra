import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <nav>
      <sidebar>
        <h1>To Do App</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/about-app">About-App</Link></li>
          <li><Link to="/about-author">About-Author</Link></li>
        </ul>
      </sidebar>
    </nav>
   );
}
 
export default Navbar;