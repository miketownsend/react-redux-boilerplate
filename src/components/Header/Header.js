import React from 'react'
import { Link } from 'react-router'

const Header = (props) => {
  return <header className={`page-header ${props.className}`}>
    <h2><Link to='/'>React Redux Boilerplate</Link></h2>
    {props.children}

    <br />
  </header>
}

export default Header
