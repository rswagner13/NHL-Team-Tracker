import { useState, useEffect } from 'react'

export default function TeamsPage({ teams, setTeams, isWildCard, setWildCardStatus, refreshQueue }) {
    
    const easternTeams = []
    const westernTeams = []
    const numOfTeams = 0

    useEffect(() => {

        refreshQueue('https://api-web.nhle.com/v1/standings/now')
    }, [])
    
    for (let i = 0; i < 32; i++) {
        if (teams[i].conferenceName === "Eastern") {
            easternTeams.push(teams[i].teamName.default)
        } else {
            westernTeams.push(teams[i].teamName.default)
        }
    }

    console.log(easternTeams)
    console.log(westernTeams)


    return (
        <>
            <h1>Teams Page</h1>
        </>
    )
}