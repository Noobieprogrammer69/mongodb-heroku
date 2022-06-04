import React, { useState, useEffect } from 'react';

import Article from '../Article';

import './../../styles/NewsArticle.css'

function NewsFetchApi() {
    const [newsShitData, setNewsShitData] = useState([]);
    const [loading, setLoading] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const newsShitApi = () => {
        fetch('https://newsdata.io/api/1/news?apikey=pub_79954dc3375e653af4ffe811e319d8d03574&q=news&country=ph&language=en&category=entertainment ')
        .then((response) => response.json())
        .then((json) => {
            console.log(newsShitData)
            setNewsShitData(json);
        });
    };

    useEffect(() => {
        setLoading(true);
        newsShitApi();
        setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(loading) {
        return <p>Loadin...</p>
    }

  return (
    <div className='for-test'>
        {newsShitData.results?.map((news, i) => <Article news={news} key={i} />)}
    </div>
  )
}

export default NewsFetchApi