import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faTwitter, 
  faHashnode
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link 
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="subhrajit" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
          exact="true"
          activeclassname="active"
          className="home-link"
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="blog-link" // Added class for blog link
          to="/blog"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHashnode} /> {/* RSS icon for blog */}
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
          <ul className={showNav ? 'social-icons-mobile' : 'social-icons'}>
        <li>
          <a
            href="https://www.linkedin.com/in/subhrajit-dutta/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Subhrajit-Dutta"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/subhro___/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Subhrastwt" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faTwitter}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a href="https://subhrajit.hashnode.dev/" rel="noreferrer" target="_blank"> {/* Hashnode URL */}
          <FontAwesomeIcon icon={faHashnode} />
          </a>
        </li>
      </ul>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/subhrajit-dutta/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Subhrajit-Dutta"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/subhro___/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Subhrastwt" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faTwitter}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a href="https://subhrajit.hashnode.dev/" rel="noreferrer" target="_blank"> {/* Hashnode URL */}
          <FontAwesomeIcon icon={faHashnode} />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar
