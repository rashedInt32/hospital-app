import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import logo from '../img/logo.svg';

function Header({ user, location }) {
  const isAuthPage = () => {
    if (location.pathname === "/register" || location.pathname === "/login") {
      return false;
    }

    return true;
  };

  return (
    <>
    {isAuthPage() ? (
      <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-left navbar-brand-wrapper d-flex align-items-center justify-content-between">
          <Link className="navbar-brand brand-logo" to="/">
            <img src={logo} alt="logo" />
          </Link>

          <button
            className="navbar-toggler align-self-center"
            type="button"
            data-toggle="minimize"
          >
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item nav-user-icon">
              <Link className="nav-link" to="/profile">
                <img src="https://via.placeholder.com/37x37" alt="" />
              </Link>
            </li>
            <li className="nav-item nav-settings d-none d-lg-flex">
              <button className="nav-link" href="#">
                <i className="mdi mdi-dots-horizontal"></i>
              </button>
            </li>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    ) : null }
    </>
  )
}

export default withRouter(Header);