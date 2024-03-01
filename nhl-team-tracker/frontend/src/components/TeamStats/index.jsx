
export default function TeamStats({ team }) {

    function currentStreak(stat) {
        if (stat === 'W') {
            
        }
    }

    return (
        <>
            <div className="columns is-centered">
                <div className="is-flex is-full-width">
                    <div className="column is-half">
                        <h1>Conference:</h1>
                    </div>
                    <div className="column is-half">
                        <p>{team.conferenceName}</p>
                    </div>
                </div>
            </div>
            <div className="columns is-centered">
                <div className="is-flex">
                    <div className="column is-half">
                        <h1>Division:</h1>
                    </div>
                    <div className="column is-half">
                        <p>{team.divisionName}</p>
                    </div>
                </div>
            </div>
            <div className="columns is-centered">
                <div className="is-flex">
                    <div className="column is-half p-0">
                        <h1>Games Played:</h1>
                    </div>
                    <div className="column is-half p-0">
                        <p>{team.gamesPlayed}</p>
                    </div>
                </div>
            </div>
            <div className="columns is-centered">
                <div className="is-flex">
                    <div className="column is-half p-0">
                        <h1>Points Scored:</h1>
                    </div>
                    <div className="column is-half p-0">
                        <p>{team.points}</p>
                    </div>
                </div>
            </div>
        </>
    )
}