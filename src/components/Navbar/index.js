
import { Link, NavLink } from 'react-router-dom';
import './index.css';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'


const Navbar = () => {

    return (
      <div className="nav-bar">
        <Link className="nav-logo logo" to="/">
          <p>
            D<span>D</span>
          </p>
        </Link>

        <nav>
          <NavLink className="nav-btn home" to="/" end>
            <p>Home</p>
          </NavLink>

          <NavLink className="nav-btn portfolio" to="/portfolio">
            <p>Portfolio</p>
          </NavLink>

          <NavLink className="nav-btn skills" to="/skills">
            <p>Skills</p>
          </NavLink>
        </nav>

        <div className="social">
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Daporta"
              >
                <FontAwesomeIcon icon={faGithub} color="#3B0444" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/danieldaporta/?locale=en_US"
              >
                <FontAwesomeIcon icon={faLinkedin} color="#3B0444" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://t.me/daportad"
              >
                <FontAwesomeIcon icon={faTelegram} color="#3B0444" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Navbar;