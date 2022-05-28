import React, { useEffect, useState } from 'react'

function Home() {
    const [homes, setHomes] = useState([])

    useEffect(() => {
        fetch('./homes')
            .then(resp => resp.json())
            .then(setHomes)
    }, [])

    return (
        <div>
            <p> Hello! </p>
            <div>
                <p> Need a home to stay in for your vacation? Just sit a pet and stay in one for free!</p>
            </div>
            <div style={{ display: 'flex' }}>
                {homes.map(home => {
                    
                })}
            </div>
            <div>

            </div>
        </div>
    );
}

export default Home;
