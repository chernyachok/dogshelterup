import React from 'react'
import {Link } from 'react-router-dom';
const Navbar = ()=>{
  return (

        <div className="topnav">
          <Link to="/">Home</Link>
          <Link to="/allbreeds">AllBreeds</Link>
          <Link to="/randombreed">RandomBreed</Link>
          <Link to="/breedoverview">BreedOverwiew</Link>
        </div>

  )
}


export default Navbar
