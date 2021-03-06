import React, { useState, useEffect } from 'react';
import UsaCases from '../UsaCases';

function UsaFetch() {
    const [usaData, setUsaData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        usaGet();
        setLoading(false);      
    // eslint-disable-next-line no-use-before-define
    }, [usaGet])
    
    const usaCases = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
            'X-RapidAPI-Key': 'bf017e85femsh3c97d252f3dedaep12c5a8jsn383d594f03c0'
        }
    };
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const usaGet = () => {       
        fetch('https://covid-193.p.rapidapi.com/history?country=usa&day=2022-06-04', usaCases)
        .then(response => response.json())
        .then((json) => {
            setUsaData(json);
        })
    }

    if(loading) {
        return <p>Loadin...</p>
    }

    return (
        <div className='news__article-container'>
                {usaData.response?.map((usaCases, i) => (
                    <UsaCases usaCases={usaCases} key={i} />
                ))}
        </div>
    )
}

export default UsaFetch;