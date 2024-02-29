import { useState, useEffect } from 'react'
import { useParams } from  'react-router-dom'

export default function SkaterStats () {
    const [playerStats, setPlayerStats] = useState({})
    const params = useParams()


    async function getPlayerInfo () {
        const res = await fetch(`https://api-web.nhle.com/v1/player/${params.id}/landing`)
        const data = await res.json()
        setPlayerStats(data)
    }
        useEffect(() => {

            getPlayerInfo()
        }, [])

    if (playerStats.playerId) {
        return (
            <div>
                <img src={playerStats.heroImage} />
            </div>
        )
    } else {
        return(
            <p>Loading, please wait</p>
        )
    }
}