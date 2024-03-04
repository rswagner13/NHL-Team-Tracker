import './styles.css'

export default function TeamStats({ team }) {

    function currentStreak(stat) {
        if (stat === 'W') {
            return ' Game Win Streak'
        } else {
            return ' Game Losing Streak'
        }
    }

    return (
        <>
            <div className="team-stats is-flex is-justify-content-center">
                <table className="table">
                    <tr>
                        <th>Conference:</th>
                        <tr className="team-value">{team.conferenceName}</tr>
                    </tr>
                    <tr>
                        <th>Division:</th>
                        <tr className="team-value">{team.divisionName}</tr>
                    </tr>
                    <tr>
                        <th>Games Player:</th>
                        <tr className="team-value">{team.gamesPlayed}</tr>
                    </tr>
                    <tr>
                        <th>Current Streak:</th>
                        <tr className="team-value">{`${team.streakCount} ${currentStreak(team.streakCode)}`}</tr>
                    </tr>
                    <tr>
                        <th>Goals Scored:</th>
                        <tr className="team-value">{team.goalFor}</tr>
                    </tr>
                    <tr>
                        <th>Goals Scored Against:</th>
                        <tr className="team-value">{team.goalAgainst}</tr>
                    </tr>
                    <tr>
                        <th><abbr title="Average Goals Scored per Game">Average GPG:</abbr></th>
                        <tr className="team-value">{team.goalsForPctg}</tr>
                    </tr>
                </table>
            </div>
        </>
    )
}