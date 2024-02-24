import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from '../HomePage'
import TeamsPage from '../TeamsPage'
import './styles.css'

export default function App() {
  const [teams, setTeams] = useState()
  const [isWildCard, setWildCardStatus] = useState(false)

  async function getData (url) {
    const res = await fetch(url)
    const { wildCardIndicator,standings } = await res.json()
    setTeams(standings)
    setWildCardStatus(wildCardIndicator)
}

  useEffect(() => {

    getData('https://api-web.nhle.com/v1/standings/now')
  }, [])


  return (
    <>
      <nav className="navbar is-dark" role="navigation" aria-label="main_navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <h1 className="is-size-3">NHL Team Tracker</h1>
          </a>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
        <Routes> 
          <Route path="/" element={
            <HomePage
            teams={teams}
            setTeams={setTeams}
            isWildCard={isWildCard}
            setWildCardStatus={setWildCardStatus}
            />}
          />

          <Route path='/teams' element={
            <TeamsPage
              teams={teams}
              setTeams={setTeams}
              refreshQueue={getData}
              isWildCard={isWildCard}
              setWildCardStatus={setWildCardStatus}
            />}
          />
        </Routes>
      </>
  )
}