import { useState, useEffect } from 'react'
import { useParams } from  'react-router-dom'

export default function PlayerInfo (props) {
    const [player, setPlayer] = useState({ ...props.roster})
    const [playerStats, setPlayerStats] = useState()
    const params = useParams()


    if(!player) {
        useEffect(() => {
            async function getPlayerInfo () {
                const res = await fetch(`https://api-web.nhle.com/v1/player/${params.id}/landing`)
                const data = res.json()
                console.log(data)
                setPlayerStats(data)
            }
            getPlayerInfo()
    
        }, [])
    }

    if (playerStats) {
        return (
            <>
                <p>{playerStats.playerId}</p>
            </>
        )
    } else {
        return(<p>Please wait while player information loads</p>)
    }


}