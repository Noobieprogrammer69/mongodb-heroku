import React, { useState, useEffect } from 'react';

import NewsArticle from '../NewsArticle';

import '../NewsArticle.jsx';

function FetchApi() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
            'X-RapidAPI-Key': 'bf017e85femsh3c97d252f3dedaep12c5a8jsn383d594f03c0'
        }
    };
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const apiGet = () => {       
        fetch('https://covid-193.p.rapidapi.com/history?country=philippines&day=2022-06-04', options)
        .then(response => response.json())
        .then((json) => {
            setData(json);
        })
    }

    useEffect(() => {
        setLoading(true);
        apiGet()
        setLoading(false)
    }, [apiGet]);

    if(loading) {
        return <p>Loadin...</p>
    }

    return (
        <div className='news__article-container'>
                {data.response?.map((article, i) => (
                    <NewsArticle article={article} key={i} />
                ))}
        </div>
    )
}

export default FetchApi