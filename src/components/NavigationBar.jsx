import React from 'react'
import { FaPizzaSlice } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div className='navigationBar'>
      <Link to="/">Pocetna</Link>
      <Link to="/pice">
        <FaPizzaSlice />
      </Link>
      </div>
  )
}

export default NavigationBar