import { Link } from "react-router-dom";
import "./NavBar.css"
export default function NavBar() {
  return (
    <nav>
      <div className="navItems"> 
      <div className="item">
        <Link className="link" to='/'>Home</Link>
      </div>
        <div className="item">
          <Link className="link" to="/snacks">Snacks</Link>
        </div>
      </div>
      <h1 style={{color:"white"}}>SnackApp</h1> 
      <button className="navButton">
          <Link className="link" to="/snacks/new">New Snack</Link>
      </button>

    </nav>
  );
}