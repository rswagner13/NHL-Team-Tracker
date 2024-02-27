import { useEffect } from 'react'
import TeamCard from '../TeamCard'
import './styles.css'

export default function TeamsPage({ teams, setTeams, refreshQueue, isWildCard, setWildCardStatus, updateDetails }) {

    const atlanticTeams = []
    const metroTeams = []
    const centralTeams = []
    const pacificTeams = []

    useEffect(() => {

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
        
        atlanticGallery = atlanticTeams.map(team => <TeamCard key={team.teamAbbrev.default} team={team} updateDetails={updateDetails}/>)
        metroGallery = metroTeams.map(team => <TeamCard key={team.teamAbbrev.default} team={team} updateDetails={updateDetails}/>)
        centralGallery = centralTeams.map(team => <TeamCard key={team.teamAbbrev.default} team={team} updateDetails={updateDetails}/>)
        pacificGallery = pacificTeams.map(team => <TeamCard key={team.teamAbbrev.default} team={team} updateDetails={updateDetails}/>)
    }

    return (
        <>
            <h1 className="is-size-1">Teams Page</h1>
            <div className="container is-fluid columns">
                <div className="eastern-conference conference-container column is-half">
                    <h1 className="is-size-2 conference-name">Eastern Conference</h1>
                    <h1 className="is-size-4">Atlantic Division</h1>
                    {atlanticGallery}
                    <h1 className="is-size-4">Metropolitan Division</h1>
                    {metroGallery}

                </div>
                <div className="eastern-conference conference-container column is-half">
                    <h1 className="is-size-2 conference-name">Western Conference</h1>
                    <h1 className="is-size-4">Central Division</h1>
                    {centralGallery}
                    <h1 className="is-size-4">Pacific Division</h1>
                    {pacificGallery}
                </div>
            </div>

        </>
    )
}