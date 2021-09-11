import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${(props.mode!=='light')?'dark':'light'} bg-${(props.mode!=='light')?'dark':'light'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" style={{color: (props.mode=='light')?'black':'white'}} href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" style={{color: (props.mode=='light')?'black':'white'}} aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{color: (props.mode=='light')?'black':'white'}} href="#">
                {props.aboutText}
              </a>
            </li>
          </ul>
          <button type="button" onClick={props.blackTheme} style={{backgroundColor: 'black'}}
 class="btn btn-primary mx-2">Black Theme</button>
          <button type="button" onClick={props.greenTheme} style={{backgroundColor: 'green'}} class="btn btn-primary">Green Theme</button>
          <button type="button" onClick={props.purpleTheme} style={{backgroundColor: 'purple'}} class="btn btn-primary mx-2">Purple Theme</button>
          <form className="d-flex">
            <input
              style={{backgroundColor : (props.mode==='light')?'white':'black',
              color : props.mode==='light'?'black':'white'}}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
          <div className={`form-check form-switch mx-3 text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlhtmlFor="flexSwitchCheckDefault">{`${props.mode==='dark'?'Disable Dark':'Enable Dark'}Mode`}</label>
        </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { 
    title: PropTypes.string.isRequired, 
    aboutText: PropTypes.string.isRequired };

Navbar.defaultProps = {
    title: "Enter Text Here",
    aboutText: "About Text Here"
}