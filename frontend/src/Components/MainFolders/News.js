import React, { useEffect, useState } from 'react';

function News() {
    const [news, setNews] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/user/news")
            .then(res => res.json())
            .then((result) => {
                setNews(result);
            }
            )
    }, [])
    return (
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Konu</th>
                        <th scope="col">Geçerlilik Tarihi</th>
                        <th scope="col">Haber Linki</th>
                    </tr>
                </thead>
                <tbody>
                    {news.map((item) => (
                    <tr key={item.id}>
                        <td>{item.subject}</td>
                        <td>{item.validityDate}</td>
                        <td>{item.newsAddress}</td>
                    </tr>
                    ))}
                </tbody>
            </table>


        </div>
    )
}

export default News