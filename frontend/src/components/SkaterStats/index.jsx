import { useState, useEffect } from 'react'
import { useParams } from  'react-router-dom'
import './styles.css'

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

    function prev5Games(player) {
        const gamesArray = []

        for (let i = 0; i < player.length; i++) {
            gamesArray.push(
                <tr>
                    <th className="has-text-centered">{player[i].gameDate}</th>
                    <th className="has-text-centered">{player[i].opponentAbbrev}</th>
                    <th className="has-text-centered">{player[i].goals}</th>
                    <th className="has-text-centered">{player[i].assists}</th>
                    <th className="has-text-centered">{player[i].shots}</th>
                    <th className="has-text-centered">{player[i].toi}</th>
                </tr>
            )
        }
        return gamesArray
    }

    function careerStats(player) {
        const careerArray = []
        console.log(player.length)
        for (let i = 0; i < player.length; i++) {
            careerArray.push(
                <tr>
                    <th className="has-text-centered">{formatSeason(player[i].season)}</th>
                    <th className="has-text-centered">{player[i].teamName.default}</th>
                    <th className="has-text-centered">{player[i].goals}</th>
                    <th className="has-text-centered">{player[i].assists}</th>
                    <th className="has-text-centered">{checkShots(player[i].shots)}</th>
                    <th className="has-text-centered">{convertPercentage(player[i].shootingPctg)}%</th>
                    <th className="has-text-centered">{checkPlaytime(player[i].avgToi)}</th>
                </tr>
            )
        }
        return careerArray
    }

    function convertPercentage(percentage) {
        let noShots = 0
        if(percentage) {
            return (percentage * 100).toFixed(2)
        } else {
            return noShots.toFixed(2)
        }
    }
    function checkShots(shots) {
        if (shots) {
            return shots
        } else {
            return 0
        }
    }

    function formatSeason(season) {
        const seasonString = season.toString()
        const formatedSeason = seasonString.substr(0,4) + ' - ' + seasonString.substr(4)
        return formatedSeason
    }

    function checkPlaytime(playtime) {
        if(playtime) {
            return playtime
        } else {
            return 'No Playtime'
        }
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
                    <div className="table-container current-stats mb-2">
                        <table className="table is-bordered is-striped is-hoverable">
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
                                    <th className="has-text-centered"># {playerStats.sweaterNumber}</th>
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
                    <div className="table-container past-5-games">
                        <table className="table is-bordered is-striped is-hoverable">
                            <thead>
                                <tr>
                                    <th className="has-text-centered">Game Date</th>
                                    <th className="has-text-centered">Opponent</th>
                                    <th className="has-text-centered">Goals</th>
                                    <th className="has-text-centered">Assists</th>
                                    <th className="has-text-centered">Shots</th>
                                    <th className="has-text-centered"><abbr title="Time on Ice">TOI</abbr></th>
                                </tr>
                            </thead>
                            <tbody>
                                {prev5Games(playerStats.last5Games)}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h1 className="is-size-2 has-text-black mb-2">Career Stats</h1>
                    </div>
                    <div className="table-container career-stats">
                        <table className="table is-bordered is-striped is-hoverable mb-4">
                            <thead>
                                <tr>
                                    <th className="has-text-centered">Season</th>
                                    <th className="has-text-centered">Team Name</th>
                                    <th className="has-text-centered">Goals</th>
                                    <th className="has-text-centered">Assists</th>
                                    <th className="has-text-centered">Shots</th>
                                    <th className="has-text-centered">Shooting Percentage</th>
                                    <th className="has-text-centered"><abbr title="Average Time on Ice">Average TOI</abbr></th>
                                </tr>
                            </thead>
                            <tbody>
                                {careerStats(playerStats.seasonTotals)}
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