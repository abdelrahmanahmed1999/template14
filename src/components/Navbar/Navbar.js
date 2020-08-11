import React from 'react';
import {NavLink} from 'react-router-dom';
import {Brand , Anchor} from './navbarstyle';

const Navbar=()=> {
  return (
    <nav className="Navbar navbar-default ">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#nav">
                    <span className="src-only"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Brand href="#" className="navbar-brand">Ultra Profile</Brand>
            </div>
            <div className="collapse navbar-collapse" id="nav">
                <ul className="nav navbar-nav navbar-right">
                    <li><NavLink exact to='/'>Home</NavLink></li>
                    <li><Anchor to='#'>Work</Anchor></li>
                    <li><Anchor to='#'>Portfolio</Anchor></li>
                    <li><Anchor to='#'>Resume</Anchor></li>
                    <li><Anchor to='#'>About</Anchor></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;