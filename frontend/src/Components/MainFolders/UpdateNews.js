import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';

function UpdateNews() {
    const params = useParams();

    const [news, setNews] = useState([])
    const [token] = useState(localStorage.getItem("token"))

    useEffect(() => {
        fetch(`http://localhost:8080/admin/findnewsbyid?id=${params.id}`, {
            headers: {
                'Authorization': "Bearer " + token
            }
        })
            .then(res => res.json())
            .then((result) => {
                setNews(result);
            }
            )
    })

    const [id, setId] = useState(params.id)
    const [subject, setSubject] = useState('')
    const [content, setContent] = useState('')
    const [validityDate, setValidityDate] = useState('')
    const [newsAddress, setNewsAddress] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        const newss = { id, subject, content, validityDate, newsAddress }
        fetch("http://localhost:8080/admin/updatenews", {
            method: "POST",
            body: JSON.stringify(newss),
            headers: {
                'Authorization': "Bearer " + token,
                'Content-Type': 'application/json'
            }

        }).then(() => {
            Swal.fire(
                'Tebrikler!',
                'Haber başarıyla güncellendi',
                'success'
            ).then(function () {
                window.location.reload();
            });
        })
    }

    return (
        <div className='container'>
            <form>
                <input hidden value={id} onChange={(e) => setId(e.target.value)} />
                <div className="form-group">
                    <label>Konu</label>
                    <input type="text" defaultValue={news.subject} onChange={(e) => setSubject(e.target.value)} class="form-control" placeholder="Konu giriniz" />
                </div>
                <div className="form-group">
                    <label>İçerik</label>
                    <input type="text" defaultValue={news.content} onChange={(e) => setContent(e.target.value)} class="form-control" placeholder="İçerik giriniz" />
                </div>
                <div className="form-group">
                    <label>Geçerlilik Tarihi</label>
                    <input type="date" defaultValue={news.validityDate} onChange={(e) => setValidityDate(e.target.value)} class="form-control" />
                </div>
                <div className="form-group">
                    <label>Haber Linki</label>
                    <input type="text" defaultValue={news.newsAddress} onChange={(e) => setNewsAddress(e.target.value)} class="form-control" placeholder='Haber Linki' />
                </div>

                <br />
                <button onClick={handleClick} type="submit" className="btn btn-primary">Güncelle</button>
            </form>

        </div>
    )
}

export default UpdateNews