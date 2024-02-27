import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function TeamDetails(props) {
    const [team, setTeam] = useState({ ...props.team })
    const params = useParams()

    let teamInfo = ' '

    useEffect(() => {

        if(!team) {
            console.log(team)
            async function getTeamStandings () {
                const res = await fetch('https://api-web.nhle.com/v1/standings/now')
                const { standings } = await res.json()

                teamInfo = standings.find(obj => obj.teamAbbrev.default === params.teamAbbrev.default)
                setTeam(teamInfo)


            }
            getTeamStandings()
        }
    }, [])

    return (
        <p>{team.teamAbbrev?.default}</p>
    )
}