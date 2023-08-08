import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import userimg from './images/userimg.png'

import  './navbar.css';

import Dropdown from 'react-bootstrap/Dropdown';

class Navbar extends Component {
    render() {
        const mystyle = {
            height: "50px",
            borderRadius: "50px"
          };

        return (
            <div >
        <nav className="navbar navbar-expand navbar-dark bg-primary">
            <a href="#" className='navbar-brand font-weight-bold' style={{marginLeft: "40px"}}>
                Bonds App
            </a>
            
            <div className='container'>
                <div className="navbar-nav mr-auto  justify-content-md-center">
                    <li className=" col p-3">
                        <Link to={'/home'} className='nav-link text-white'>
                            Dashboard
                        </Link>
                    </li>

                    {/* <li className="nav-item col p-3">
                        <Link to={'/report'} className="nav-link text-white">
                            Report
                        </Link>
                    </li> */}

                    <li className=" col p-3">
                        <Link to={'/security'} className="nav-link text-white">
                            Security
                        </Link>
                    </li>

                    <li className=" col-md-auto p-3">
                        <Link to={'/usertrades'} className="nav-link text-white">
                            Trade Table
                        </Link>
                    </li>


                    
                        {/* <form class="d-flex col-4 w-100 p-3" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-primary" type="submit">Search</button>
                        </form> */}

                    
                </div>


            </div>

            <div className='dropdown'>
                {/* <button className='btn btn-default dropdown-toggle'><img src={userimg} alt="" style={mystyle}/></button> */}
                <Dropdown>
                    <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                        <img src={userimg} alt="" style={mystyle}/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Profile</Dropdown.Item>
                        <Dropdown.Item href="#">Initiate new Trade</Dropdown.Item>
                        <Dropdown.Item href="#">Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </nav>
        </div>
        );
    }
}

export default Navbar;