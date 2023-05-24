import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  bg-dark"data-bs-theme="dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li class="nav-item">
          <Link class="nav-link"  to="/Dashboard" >Dashboard</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Quotations">Quotations</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/posts">Items</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Quotationsitem">QuotationsItem</Link>
        </li>
      </ul>
      <span class="navbar-text">
       admin@example.com 
      </span>
      <span class="navbar-text">
       <button type='btn' className='button'>Logout</button>
      </span>
    </div>
  </div>
</nav>
    </div>
  )
}
