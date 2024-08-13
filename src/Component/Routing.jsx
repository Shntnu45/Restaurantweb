import React from 'react'
import './Style.css'
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
<>
 <header className='navbar'>
 <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid" >
        <a class="navbar-brand" href="#"> <b className='taste'>TASTY FOOD</b></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <ul class="navbar-nav" >
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/">HOME</Link>
                </li>
                
                <li class="nav-item">
                  <Link class="nav-link" to="/about"> ABOUT </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/menu">MENU </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/service">SERVICES </Link>
                </li>
                
              </ul>
              <form class="d-flex" role="search" >
                <input class="form-control me-2" type="search" placeholder="Search For Your Cravings" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
              <select className='btn' style={{marginLeft:100}}>
                      <option selected><b>Select location</b></option>
                      <option class="D1" value="1">Ahmdabad</option>
                      <option class="D1" value="2">Bengluru</option>
                      <option class="D1" value="3">Chennai</option>
                      <option class="D1" value="4">Delhi</option>
                      <option class="D1" value="5">Haidrabad</option>
                      <option class="D1" value="6">Igatpuri</option>
                      <option class="D1" value="7">Jalgaon</option>
                      <option class="D1" value="8">Kolkata</option>
                      <option class="D1" value="9">Mumbai</option>
                      <option class="D1" value="10">Nashik</option>
                      <option class="D1" value="11">Pune</option>
                    </select> 
                
              </ul>
        
      </div>
    </div>
  </nav>
 </header>
</>
    )
}














