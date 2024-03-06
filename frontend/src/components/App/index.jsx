import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from '../HomePage'
import TeamsPage from '../TeamsPage'
import TeamDetails from '../TeamDetails'
import SkaterStats from '../SkaterStats'
import AuthForm from '../AuthForm'
import './styles.css'

export default function App() {
  const [teams, setTeams] = useState()
  const [isWildCard, setWildCardStatus] = useState(false)
  const [teamDetailsData, setTeamDetailsData] = useState([])
  const [teamSchedule, setTeamSchedule] = useState([])
  const [teamRoster, setTeamRoster] = useState([])
  const [teamLogos, setTeamLogos] = useState([])
  const [loginStatus, setLoginStatus] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [pageName, setPageName] = useState(' ')

  function getTeamLogos(teamStandings) {
    const logoArray= []
    for(let i = 0; i < teamStandings.length; i++) {
      logoArray.push(teamStandings[i].teamLogo)
    }
    setTeamLogos(logoArray)
  }

  async function getData(url) {
    const res = await fetch(url)
    const { wildCardIndicator,standings } = await res.json()
    setTeams(standings)
    setWildCardStatus(wildCardIndicator)
    getTeamLogos(standings)
}

  useEffect(() => {
    // Grabbing current NHL standings
    getData('https://api-web.nhle.com/v1/standings/now')
    // Check to see if a user is currently logged in
    if (localStorage.getItem('userToken')) {setLoginStatus(true)}
  }, [])


  let authLink = <div id="navbarBasicExample"
    className={`navbar-menu ${isActive ? "is-active" : ""}`}>
    <div className="navbar-end">
      <a href="/auth/signup" className="navbar-item is-size-5">
        Sign Up
      </a>
      <a href="/auth/login" className="navbar-item is-size-5">
        Log In
      </a>
      <a href="/teams" className="navbar-item is-size-5">
        Teams
      </a>
    </div>
  </div>

    if (loginStatus) {
      authLink =  <div id="navbarBasicExample"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}>
      <div className="navbar-end">
        <a href="/teams" className="navbar-item is-size-5">
          Teams
        </a>
          <a 
            className="log-out navbar-item is-size-5"
            onClick={() => {
              localStorage.clear()
              setLoginStatus(false)
            }}
            href="/"
          >
            Log Out
          </a>
      </div>
    </div>
    }

  return (
    <>
      <nav className="navbar is-dark is-flex" role="navigation" aria-label="main_navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <h1 className="is-size-2">NHL Now</h1>
          </a>
        </div>
        <div className="page-title is-flex is-align-items-center is-justify-content-center">
          <h1 className="is-size-1 has-text-white page-name">{pageName}</h1>
        </div>
        <div>
          <a 
            onClick={() => {
              setIsActive(!isActive)
            }}
            role="button" 
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`} 
            aria-label="menu" 
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        {authLink}
      </nav>
        <Routes> 
          <Route path="/" element={
            <HomePage
              teamLogos={teamLogos}
              setPageName={setPageName}
            />}
          />

          <Route path='/teams' element={
            teams? <TeamsPage
              teams={teams}
              refreshQueue={getData}
              updateTeamDetails={setTeamDetailsData}
              updateTeamSchedule={setTeamSchedule}
              updateTeamRoster={setTeamRoster}
              isWildCard={isWildCard}
              setWildCardStatus={setWildCardStatus}
              setPageName={setPageName}
            /> : null}
          />
          <Route path='/teams/:teamCode' element={
            <TeamDetails 
              team={teamDetailsData}
              schedule={teamSchedule}
              roster={teamRoster}
              setPageName={setPageName}
            />}
          />
          <Route path='/teams/:teamCode/:id' element={
            <SkaterStats
              setPageName={setPageName}
            />}
          />
          <Route path='/auth/:formType' element={
            <AuthForm 
            setLoginStatus={setLoginStatus}
            />}
          />
        </Routes>
    </>
  )
}