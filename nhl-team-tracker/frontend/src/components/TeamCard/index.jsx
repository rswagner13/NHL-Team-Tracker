import { Link } from 'react-router-dom'

export default function TeamCard({ team, updateDetails }) {


    return (
        <>
            <Link to={'/teams/' + team.teamAbbrev.default} onClick={() => updateDetails(team)}>
                <div className="team-container column is-flex">
                    <div className="team-logo image is-128x128">
                        <img src={team.teamLogo}/>
                    </div>
                    <table className="table is-full-width">
                        <thead>
                            <tr>
                                <th><abbr title="Team Name">Name</abbr></th>
                                <th><abbr title="Wins">W</abbr></th>
                                <th><abbr title="Losses">L</abbr></th>
                                <th><abbr title="Ties">T</abbr></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>{team.teamName.default}</th>
                                <td>{team.wins}</td>
                                <td>{team.losses}</td>
                                <td>{team.ties}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Link>
        </>
    )
}