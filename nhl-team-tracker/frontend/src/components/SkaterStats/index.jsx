import { useState, useEffect } from 'react'
import { useParams } from  'react-router-dom'

export default function SkaterStats ({ setPageName }) {
    const [playerStats, setPlayerStats] = useState({})
    const [playerName, setPlayerName] = useState(setPageName(`${playerStats.firstName?.default} ${playerStats.lastName?.default}`))
    const params = useParams()

    function playerPosition(posCode) {
        if (posCode === 'C') {
            return 'Center'
        } else if (posCode === 'L') {
            return 'Left Wing'
        } else if (posCode === 'R') {
            return 'Right Wing'
        } else if (posCode === 'D') {
            return 'Defensemen'
        } else {
            return 'Goalie'
        }
    }

    function inchesToFeet(inches) {
        const feet = inches / 12
        const inchesLeft = inches % 12
        return `${Math.trunc(feet)} foot ${inchesLeft} inches`
    }

    async function getPlayerInfo () {
        const res = await fetch(`https://api-web.nhle.com/v1/player/${params.id}/landing`)
        const data = await res.json()
        setPlayerStats(data)
    }
        useEffect(() => {
            setPlayerName()
            getPlayerInfo()
        }, [])

    if (playerStats.playerId) {
        return (
            <div className="player-info-container">
                <div>
                    <img src={playerStats.heroImage} />
                    <h1 className="is-size-2 has-text-black">Player Stats</h1>
                </div>
                <div className="player-stat-container is-justify-content-center is-align-items-baseline">
                    <div className="position">
                        <h2 className="is-size-3 has-text-black">Position: </h2>
                    </div>
                    <div className="is-centered">
                        <h2 className="has-text-black is-size-4 ml-4">{playerPosition(playerStats.position)}</h2>
                    </div>
                </div>
                <div className="player-stat-container is-flex is-justify-content-center is-align-items-baseline">
                    <div className="jersey-number">
                        <h2 className="is-size-3 has-text-black">Jersey Number: </h2>
                    </div>
                    <div className="is-centered">
                        <h2 className="has-text-black is-size-3 ml-4">#{playerStats.sweaterNumber}</h2>
                    </div>
                </div>
                <div className="player-stat-container is-justify-content-center is-align-items-baseline">
                    <div className="height">
                        <h2 className="is-size-3 has-text-black">Height: </h2>
                    </div>
                    <div className="is-centered">
                        <h2 className="has-text-black is-size-4 ml-4">{inchesToFeet(playerStats.heightInInches)}</h2>
                    </div>
                </div>
                <div className="player-stat-container is-flex is-justify-content-center is-align-items-baseline">
                    <div className="weight">
                        <h2 className="is-size-3 has-text-black">Weight: </h2>
                    </div>
                    <div className="is-centered">
                        <h2 className="has-text-black is-size-4 ml-4">{playerStats.weightInPounds} pounds</h2>
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            <div>
                <p className="is-size-2">Loading, please wait...</p>
                <img src="/puck-drop.gif" />
            </div>
        )
    }
}