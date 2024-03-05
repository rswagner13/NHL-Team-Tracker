import './styles.css'

export default function TeamSchedule ({ schedule }) {

    function gameStatus(game) {
        if(game === 'OFF'|| game === 'FINAL'){
            return 'FINAL'
        } else {
            return 'UPCOMING GAME'
        }
    }

    function printSchedule(games) {
        const gameArray = []
        for (let i = 0; i < games.length; i++) {
            gameArray.push(
            <div className="schedule-details is-centered has-text-black" key={[i]}>
                <p>{games[i].gameDate}</p>
                <p>{gameStatus(games[i].gameState)}</p>
                <div className="game-score-container is-flex is-justify-content-center is-align-items-center">
                    <div className="px-4">
                        <img className="image is-96x96" src={games[i].awayTeam.logo} />
                        <p className="has-text-black is-size-4">{games[i].awayTeam.score}</p>
                    </div>
                    <div className="px-4">
                        <img className="image is-96x96" src={games[i].homeTeam.logo} />
                        <p className="has-text-black is-size-4">{games[i].homeTeam.score}</p>
                    </div>
                </div>
                
            </div>
            )
        }

        return gameArray
    }

    if(schedule) {
        return (
            <>
                <div>
                    {printSchedule(schedule)}
                </div>
            </>
        )
    }
}