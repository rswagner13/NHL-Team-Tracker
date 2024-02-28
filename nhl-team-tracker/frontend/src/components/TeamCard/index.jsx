import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function TeamCard({ team, updateTeamDetails, updateTeamSchedule, updateTeamRoster }) {
    const [schedule, setSchedule] = useState()
    const [roster, setRoster]  = useState()

    const scheduleRes = fetch(`https://api-web.nhle.com/v1/club-schedule-season/${team.teamAbbrev.default}/now`)
        .then(res => res.json())
    const rosterRes = fetch(`https://api-web.nhle.com/v1/roster/${team.teamAbbrev.default}/current`)
        .then(res => res.json())


    function updateTeamInfo() {
        updateTeamDetails(team)
        updateTeamSchedule(schedule)
        updateTeamRoster(roster)
    }

    if(!team.teamAbbrev) { 
        useEffect(() => {
            async function getOtherInfo() {
                const results = await Promise.all([scheduleRes, rosterRes])
                const {games} = results[0]
                const playerRoster = results[1]
    
                setSchedule(games)
                setRoster(playerRoster)
            }
    
            getOtherInfo()

        }, [])
    }

    if(team.teamAbbrev) {
        return (
            <>
                <Link 
                    to={'/teams/' + team.teamAbbrev.default} 
                    onClick={() => updateTeamInfo}>
                    <div className="team-container column is-flex">
                        <div className="team-logo image is-128x128">
                            <img src={team.teamLogo}/>
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
                                    <th>{team.teamName.default}</th>
                                    <td>{team.wins}</td>
                                    <td>{team.losses}</td>
                                    <td>{team.ties}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Link>
            </>
        )
    }
    
}