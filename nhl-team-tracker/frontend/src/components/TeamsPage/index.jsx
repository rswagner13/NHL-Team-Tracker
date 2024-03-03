import { useEffect } from 'react'
import TeamCard from '../TeamCard'
import './styles.css'

export default function TeamsPage({ teams, refreshQueue, isWildCard, setWildCardStatus, updateTeamDetails, updateTeamSchedule, updateTeamRoster, setPageName }) {

    const atlanticTeams = []
    const metroTeams = []
    const centralTeams = []
    const pacificTeams = []

    useEffect(() => {

        setPageName('Teams')
        refreshQueue('https://api-web.nhle.com/v1/standings/now')
    }, [])

    let atlanticGallery = ' '
    let metroGallery = ' '
    let centralGallery = ' '
    let pacificGallery = ' '

    if(teams.length > 0) {
        for (let i = 0; i < teams.length; i++) {
            if (teams[i].conferenceName === "Eastern" && teams[i].divisionName === "Atlantic") {
                atlanticTeams.push(teams[i])
            } else if (teams[i].conferenceName === "Eastern" && teams[i].divisionName === "Metropolitan") {
                metroTeams.push(teams[i])
            } else if (teams[i].conferenceName === "Western" && teams[i].divisionName === "Central") {
                centralTeams.push(teams[i])
            } else {
                pacificTeams.push(teams[i])
            }
        }
        
        atlanticGallery = atlanticTeams.map(team => 
        <TeamCard 
            key={team.teamAbbrev.default} 
            team={team} 
            updateTeamDetails={updateTeamDetails} 
            updateTeamSchedule={updateTeamSchedule} 
            updateTeamRoster={updateTeamRoster}
        />)
        metroGallery = metroTeams.map(team => 
        <TeamCard 
            key={team.teamAbbrev.default}
            team={team} 
            updateTeamDetails={updateTeamDetails}
            updateTeamSchedule={updateTeamSchedule} 
            updateTeamRoster={updateTeamRoster}
            />)
        centralGallery = centralTeams.map(team => 
        <TeamCard 
            key={team.teamAbbrev.default} 
            team={team} 
            updateTeamDetails={updateTeamDetails}
            updateTeamSchedule={updateTeamSchedule} 
            updateTeamRoster={updateTeamRoster}
        />)
        pacificGallery = pacificTeams.map(team => 
        <TeamCard 
            key={team.teamAbbrev.default} 
            team={team} 
            updateTeamDetails={updateTeamDetails}
            updateTeamSchedule={updateTeamSchedule} 
            updateTeamRoster={updateTeamRoster}
        />)
    }

    return (
        <>
            <div className="container columns is-fluid">
                <div className="eastern-conference conference-container column is-half">
                    <h1 className="is-size-2 conference-name is-uppercase has-text-black-ter">Eastern Conference</h1>
                    <h1 className="is-size-4 is-uppercase has-text-black-ter">Atlantic Division</h1>
                    {atlanticGallery}
                    <h1 className="is-size-4 is-uppercase has-text-black-ter">Metropolitan Division</h1>
                    {metroGallery}

                </div>
                <div className="eastern-conference conference-container column is-half">
                    <h1 className="is-size-2 conference-name is-uppercase has-text-black-ter">Western Conference</h1>
                    <h1 className="is-size-4 is-uppercase has-text-black-ter">Central Division</h1>
                    {centralGallery}
                    <h1 className="is-size-4 is-uppercase has-text-black-ter">Pacific Division</h1>
                    {pacificGallery}
                </div>
            </div>

        </>
    )
}