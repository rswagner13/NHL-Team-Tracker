import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CommentSection  from '../CommentSection'

export default function TeamDetails(props) {
    const [team, setTeam] = useState({ ...props.team })
    const [schedule, setSchedule] = useState()
    const params = useParams()

    useEffect(() => {

        if(!team.teamAbbrev) {
            
            async function getTeamStandings () {
                const res = await fetch('https://api-web.nhle.com/v1/standings/now')
                const { standings } = await res.json()
                const teamInfo = standings.find(obj => obj.teamAbbrev.default === params.teamCode)
                setTeam(teamInfo)


            }
            getTeamStandings()
        }
    }, [])

    // useEffect(() => {
    //     if(!team.teamAbbrev?.default) {
    //         async function getTeamSchedule () {
    //             const res = await fetch(`https://api-web.nhle.com/v1/club-schedule-season/${params.teamAbbrev?.default}/now`)
    //             const { games } = res.json()
    //             setSchedule(games)
    //         }
    //         getTeamSchedule()
    //     }
        
    // }, [])

    if (team.teamAbbrev) {
        return (
            <>
                <div className="container is-fluid columns">
                    <div className="team-info column is-one-third">
                        <p>{team.teamAbbrev.default}</p>
                        <p>{team.teamName.default}</p>
                        <img src={team.teamLogo}/>
                    </div>
                    <div className="team-schedule column is-one-third">
                        <div>
                            <h1>Team Schedule</h1>
                        </div>
                    </div>
                    <div className="player-roster column is-one-third">
                        <div>
                            <h1>Team Roster</h1>
                        </div>
                    </div>
                </div>
                
    
    
                <CommentSection teamId={team.teamAbbrev.default} />
            </>
            
        )
    } else {
        return (
            <p>Loading, please wait...</p>
        )
    }
 
}