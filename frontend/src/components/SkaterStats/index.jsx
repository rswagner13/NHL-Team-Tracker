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

    async function getPlayerInfo () {
        const res = await fetch(`https://api-web.nhle.com/v1/player/${params.id}/landing`)
        const data = await res.json()
        setPlayerStats(data)
    }

    function convertPercentage(percentage) {
        return (Math.round(percentage * 100)).toFixed(2)
    }

        useEffect(() => {
            setPlayerName()
            getPlayerInfo()
        }, [])

    if (playerStats.playerId) {
        return (
            <>
                <div className="player-info-container">
                    <div>
                        <img src={playerStats.heroImage} />
                    </div>
                    <div>
                        <h1 className="is-size-2 has-text-black mb-2">Current Season Stats</h1>
                    </div>
                    <div className="current-stats mb-2">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="has-text-centered">Player Position</th>
                                    <th className="has-text-centered">Jersey Number</th>
                                    <th className="has-text-centered">Games Played</th>
                                    <th className="has-text-centered">Goals</th>
                                    <th className="has-text-centered">Assists</th>
                                    <th className="has-text-centered">Shots</th>
                                    <th className="has-text-centered">Shooting Percentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="has-text-centered">{playerPosition(playerStats.position)}</th>
                                    <th className="has-text-centered">#{playerStats.sweaterNumber}</th>
                                    <th className="has-text-centered">{playerStats.featuredStats.regularSeason.subSeason.gamesPlayed}</th>
                                    <th className="has-text-centered">{playerStats.featuredStats.regularSeason.subSeason.goals}</th>
                                    <th className="has-text-centered">{playerStats.featuredStats.regularSeason.subSeason.assists}</th>
                                    <th className="has-text-centered">{playerStats.featuredStats.regularSeason.subSeason.shots}</th>
                                    <th className="has-text-centered">{convertPercentage(playerStats.featuredStats.regularSeason.subSeason.shootingPctg)}%</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h1 className="is-size-2 has-text-black mb-2">Previous 5 Games</h1>
                    </div>
                    <div className="past-5-games">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="has-text-centered">Player Position</th>
                                    <th className="has-text-centered">Jersey Number</th>
                                    <th className="has-text-centered">Games Played</th>
                                    <th className="has-text-centered">Goals</th>
                                    <th className="has-text-centered">Assists</th>
                                    <th className="has-text-centered">Shots</th>
                                    <th className="has-text-centered">Shooting Percentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="has-text-centered">{playerPosition(playerStats.position)}</th>
                                    <th className="has-text-centered">#{playerStats.sweaterNumber}</th>
                                    <th className="has-text-centered">{playerStats.featuredStats.regularSeason.subSeason.gamesPlayed}</th>
                                    <th className="has-text-centered">{playerStats.featuredStats.regularSeason.subSeason.goals}</th>
                                    <th className="has-text-centered">{playerStats.featuredStats.regularSeason.subSeason.assists}</th>
                                    <th className="has-text-centered">{playerStats.featuredStats.regularSeason.subSeason.shots}</th>
                                    <th className="has-text-centered">{convertPercentage(playerStats.featuredStats.regularSeason.subSeason.shootingPctg)}%</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </>

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