
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default function TeamsPage({ teams, setTeams, refreshQueue, isWildCard, setWildCardStatus }) {

    const atlanticTeams = []
    const centralTeams = []
    const metroTeams = []
    const pacificTeams = []

    useEffect(() => {

        refreshQueue('https://api-web.nhle.com/v1/standings/now')
    }, [])

     for (let i = 0; i < teams.length; i++) {
        if (teams[i].conferenceName === "Eastern" && teams[i].divisionName === "Atlantic") {
            atlanticTeams.push({
                "teamName": teams[i].teamName.default,
                 "teamCode": teams[i].teamAbbrev.default,
                "teamLogo": teams[i].teamLogo,
                 "conferenceName": teams[i].conferenceName,
                 "divisionName": teams[i].divisionName,
                 "wins": teams[i].wins,
                 "losses": teams[i].losses,
                 "ties": teams[i].ties,
             })
        } else if (teams[i].conferenceName === "Eastern" && teams[i].divisionName === "Metropolitan") {
            metroTeams.push({
                "teamName": teams[i].teamName.default,
                 "teamCode": teams[i].teamAbbrev.default,
                "teamLogo": teams[i].teamLogo,
                 "conferenceName": teams[i].conferenceName,
                 "divisionName": teams[i].divisionName,
                 "wins": teams[i].wins,
                 "losses": teams[i].losses,
                 "ties": teams[i].ties,
            })
        } else if (teams[i].conferenceName === "Western" && teams[i].divisionName === "Central") {
            centralTeams.push({
                "teamName": teams[i].teamName.default,
                 "teamCode": teams[i].teamAbbrev.default,
                "teamLogo": teams[i].teamLogo,
                 "conferenceName": teams[i].conferenceName,
                 "divisionName": teams[i].divisionName,
                 "wins": teams[i].wins,
                 "losses": teams[i].losses,
                 "ties": teams[i].ties,
            })
        } else {
            pacificTeams.push({
                "teamName": teams[i].teamName.default,
                 "teamCode": teams[i].teamAbbrev.default,
                "teamLogo": teams[i].teamLogo,
                 "conferenceName": teams[i].conferenceName,
                 "divisionName": teams[i].divisionName,
                 "wins": teams[i].wins,
                 "losses": teams[i].losses,
                 "ties": teams[i].ties,
            })
        }
    }

    console.log(atlanticTeams)

    function printTeam(division) {
        const arr = []
        for(let i = 0; i < division.length; i++) {
            arr.push(
                <Link to={'/teams/' + division[i].teamCode} onClick={() => updateDetails(team)}>
                    <div className="team-container column is-flex">
                        <div className="team-logo image is-128x128">
                            <img src={division[i].teamLogo}/>
                        </div>
                        <table className="table is-full-width">
                            <thead>
                                <tr>
                                    <th><abbr title="Team Name">Name</abbr></th>
                                    <th><abbr title="Wins">W</abbr></th>
                                    <th><abbr title="Losses">L</abbr></th>
                                    <th><abbr title="Ties">T</abbr></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>{division[i].teamName}</th>
                                    <td>{division[i].wins}</td>
                                    <td>{division[i].losses}</td>
                                    <td>{division[i].ties}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Link>
            )
        }

        return arr
    }

    return (
        <>
            <h1 className="is-size-1">Teams Page</h1>
            <div className="container is-fluid columns">
                <div className="eastern-conference conference-container column is-half">
                    <h1 className="is-size-2 conference-name">Eastern Conference</h1>
                    <h1 className="is-size-4">Atlantic Division</h1>
                    {printTeam(atlanticTeams)}
                    <h1 className="is-size-4">Metropolitan Division</h1>
                    {printTeam(metroTeams)}
                </div>
                <div className="western-conference conference-container column is-half">
                    <h1 className="is-size-2 conference-name">Western Conference</h1>
                    <h1 className="is-size-4">Central Division</h1>
                    {printTeam(centralTeams)}
                    <h1 className="is-size-4">Pacific Division</h1>
                    {printTeam(pacificTeams)}
                </div>
            </div>
        </>
    )
}