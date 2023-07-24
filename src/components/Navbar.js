import "./Navbar.css";
import { Link } from "react-router-dom";
import React from "react";
import Searchbar from "./Searchbar";
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'


function Navbar() {
	const { color } = useContext(ThemeContext)


  return (
	<div className="navbar" style={{ background: color }}>
	<nav>
	  <Link to="/" className="brand">
		 <h1>Cooking Recipes</h1>
	  </Link>
	  <Searchbar />
	  <Link to="/create">Create Recipe</Link>
	</nav>
 </div>
  );
}

export default Navbar;
