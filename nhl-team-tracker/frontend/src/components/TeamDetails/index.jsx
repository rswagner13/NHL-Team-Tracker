import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CommentSection  from '../CommentSection'
import TeamSchedule from '../TeamSchedule'
import TeamRoster from '../TeamRoster'
import './styles.css'

export default function TeamDetails(props) {
    const [team, setTeam] = useState({ ...props.team })
    const [schedule, setSchedule] = useState({ ...props.schedule})
    const [roster, setRoster]  = useState({ ...props.roster })
    const params = useParams()

    const teamRes = fetch('https://api-web.nhle.com/v1/standings/now')
        .then(res => res.json())
    const scheduleRes = fetch(`https://api-web.nhle.com/v1/club-schedule-season/${params.teamCode}/now`)
        .then(res => res.json())
    const rosterRes = fetch(`https://api-web.nhle.com/v1/roster/${params.teamCode}/current`)
        .then(res => res.json())

    useEffect(() => {

        if(!team.teamAbbrev) {

            async function getTeamInfo () {
                const results = await Promise.all([teamRes, scheduleRes, rosterRes])
                const {standings} = results[0]
                const teamInfo = standings.find(obj => obj.teamAbbrev.default === params.teamCode)

                const {games} = results[1]
                const playerRoster = results[2]

                setTeam(teamInfo)
                setSchedule(games)
                setRoster(playerRoster)          
            }
            getTeamInfo()
        }
    }, [])

    if (team.teamAbbrev) {
        return (
            <>
                <div className="background-image">
                    <img src={team.teamLogo} />  
                    <div className="container is-fluid columns">
                        
                        <div className="team-info column is-one-third">
                            <h1 className="is-size-3">Team Stats</h1>
                            
                        </div>
                        <div className="team-schedule column is-one-third">
                            <h1 className="is-size-3">Team Schedule</h1>
                            <div className="schedule-container">
                                <TeamSchedule key={team.teamAbbrev.default} schedule={schedule}/>
                            </div>
                        </div>
                        <div className="player-roster column is-one-third">
                            <h1 className="is-size-3">Team Roster</h1>
                            <div className="roster-container">
                                <TeamRoster key={team.teamAbbrev.default} roster={roster} team={team}/>
                            </div>
                        </div>
                    </div>
                    <CommentSection teamId={team.teamAbbrev.default} />
            
                </div>
            
            </>
            
        )
    } else {
        return (
            <p>Loading, please wait...</p>
        )
    }
}