import { useState } from 'react'
import './styles.css'

export default function App() {

  return (
    <>
      <nav className="navbar is-dark" role="navigation" aria-label="main_navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <h1 className="is-size-3">NHL Team Tracker</h1>
          </a>
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
        <h1 className="is-size-1">Welcome Home, Hockey Fans!</h1>
      </>
  )
}