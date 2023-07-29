import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <Link className="navbar-brand" to='/'>
            <svg width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-sm mr-0 w-10 h-10 text-link dark:text-link-dark flex origin-center transition-all ease-in-out">
              <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
              <g stroke="currentColor" strokeWidth="1" fill="none">
                <ellipse rx="10" ry="4.5"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
              </g>
            </svg>
          </Link>
        </div>
        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
