import { Link } from 'react-router-dom';
import './navBar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg container-par">
      <Link to="/" className="navbar-brand brand">
        Employee Management Admin System
      </Link>
      <div className="collpase navbar-collapse right-display">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item right-display">
            <Link to="/create" className="nav-link">
              Add Employee
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
