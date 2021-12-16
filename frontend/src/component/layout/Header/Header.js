import React, { useState } from "react";
import "./Header.css";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header({ history }) {
  const { isAuthenticated, user } = useSelector(state => state.user);
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = e => {
    e.preventDefault();

    if (keyword.trim()) {
      history.push(`/products/${keyword}`);
    } else {
      history.push("/products");
    }
  };

  return (
    <header className='section-header'>
      <nav className='navbar navbar-dark navbar-expand p-0 bg-dark'></nav>
      <section className='header-main border-bottom bg-white'>
        <div className='container-fluid'>
          <div className='row p-2 pt-3 pb-3 d-flex align-items-center'>
            <div className='col-md-2'>
              <img
                className='d-none d-md-flex Logo '
                src='https://i.imgur.com/R8QhGhk.png'
                width='100'
              />
            </div>
            <div className='col-md-8'>
              <div className='d-flex form-inputs'>
                <form className='searchBox' onSubmit={searchSubmitHandler}>
                  <input
                    className='searchboxx'
                    type='text'
                    placeholder='Search Product ...'
                    onChange={e => setKeyword(e.target.value)}
                  />
                  <input className='searchbtn' type='submit' value='Search' />
                </form>
              </div>
            </div>
            <div className='col-md-2'>
              <div className='d-flex d-none d-md-flex flex-row align-items-center'>
                {/* <span className='shop-bag'>
                  <Link className='user' to='/cart'>
                    <i className='bx bxs-shopping-bag'></i>
                  </Link>
                </span> */}
                {!isAuthenticated ? (
                  <span className='shop-bag'>
                    <Link className='user' to='/login'>
                      <i className='bx bxs-user'></i>
                    </Link>
                  </span>
                ) : (
                  ""
                )}

                <div className='d-flex flex-column ms-2'> </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <a className='navbar-brand d-md-none d-md-flex' href='#'>
            Menu
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' to='/'>
                  <i class='bx bx-home home'></i>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='products'>
                  <i class='bx bxs-store home'></i>
                  Product
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='#'>
                  <i class='bx bxs-contact home'></i>
                  Contact
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link ' to='#'>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default withRouter(Header);
