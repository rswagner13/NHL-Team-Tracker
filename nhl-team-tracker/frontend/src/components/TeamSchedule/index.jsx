
export default function TeamSchedule ({ schedule }) {

    function printSchedule(games) {
        const gameArray = []
        for (let i = 0; i < games.length; i++) {
            gameArray.push(
            <div className="schedule-details" key={[i]}>
                <p>{games[i].gameDate}</p>
                <p>{games[i].gameState}</p>
                <div className="is-flex">
                    <div>
                        <img className="image is-96x96" src={games[i].awayTeam.logo} />
                    </div>
                    <div>
                        <p>{games[i].awayTeam.score}</p>
                    </div>
                    <div>
                        <img className="image is-96x96" src={games[i].homeTeam.logo} />
                    </div>
                    <div>
                        <p>{games[i].homeTeam.score}</p>
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