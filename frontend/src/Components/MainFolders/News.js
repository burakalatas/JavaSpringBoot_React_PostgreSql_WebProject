import React, { useEffect, useState } from 'react';
import '../../custom.css';
import Swal from 'sweetalert2';

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

    const popup = (item) => async () => {

            Swal.fire({
                title: item.subject,
                text: item.content,
                footer: `<a target="_blank" href="${item.newsAddress}">Linke Git</a>`,
                confirmButtonText: 'Kapat',

        })
    }

    return (
        <div>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th scope="col">Konu</th>
                        <th scope="col">Geçerlilik Tarihi</th>
                        <th scope="col">Haber Linki</th>
                    </tr>
                </thead>
                <tbody>
                    {news.map((item) => (
                    <tr key={item.id} >
                        <td onClick={popup(item)} >{item.subject}</td>
                        <td onClick={popup(item)} >{item.validityDate}</td>
                        <td ><a className='btn btn-primary' target='_blank' rel='noreferrer' href={item.newsAddress}>Linke Git</a></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default News