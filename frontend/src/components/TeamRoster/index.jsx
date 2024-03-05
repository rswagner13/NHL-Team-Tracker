import { Link } from 'react-router-dom'
import './styles.css'

export default function TeamRoster({ roster, team }) {

    const playerArray = []

    for (let i = 0 ; i < roster.defensemen.length; i++) {
        playerArray.push(roster.defensemen[i])
    }
    for (let j = 0 ; j < roster.forwards.length; j++) {
        playerArray.push(roster.forwards[j])
    }
    for (let k = 0 ; k < roster.goalies.length; k++) {
        playerArray.push(roster.goalies[k])
    }

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

    function printPlayer(arr) {
        const array = []
        for (let i = 0; i < arr.length; i++) {
            array.push(
                <Link to={`/teams/${team.teamAbbrev.default}/${arr[i].id}`}
                key={[i]}
                >
                    <div className="is-flex is-justify-content-center player-container">
                        <div>
                            <img className="image is-96x96" src={arr[i].headshot} />
                        </div>
                        <div>
                            <p className="has-text-black">{`${arr[i].firstName.default} ${arr[i].lastName.default}`}</p>
                            <p className="has-text-black">Position: {playerPosition(arr[i].positionCode)}</p>
                        </div>
                    </div>    
                </Link>
            )
        }
        return array
    }

    return (
            <div className="defense-container">
                {printPlayer(playerArray)}
            </div>
    )
}