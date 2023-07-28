import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AdminAnnouncements() {
    const [announcement, setAnnouncement] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/user/announcement")
            .then(res => res.json())
            .then((result) => {
                setAnnouncement(result);
            }
            )
    }, [])

    const del = (id) => async () => {

        await fetch(`http://localhost:8080/admin/deleteannouncement?id=${id}`, {
            method: "DELETE",
            body: JSON.stringify(id)

        }).then(() => {
            console.log("Announcement deleted")
            window.location.reload()
        })
    }

    return (
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Konu</th>
                        <th scope="col">İçerik</th>
                        <th scope="col">Geçerlilik Tarihi</th>
                        <th scope="col">Haber Linki</th>
                        <th scope="col">Güncelle</th>
                        <th scope="col">Sil</th>
                    </tr>
                </thead>
                <tbody>
                    {announcement.map((item) => (
                    <tr key={item.id}>
                        <th scope="row">{item.id}</th>
                        <td>{item.subject}</td>
                        <td>{item.content}</td>
                        <td>{item.validityDate}</td>
                        <td>{item.image}</td>
                        <td><Link className='btn btn-warning' to={{pathname:`/Admin/UpdateAnnouncement/${item.id}`}}>Güncelle</Link></td>
                            <td><button type="button" onClick={del(item.id)} class="btn btn-danger">Sil</button></td>
                    </tr>
                    ))}
                </tbody>
            </table>


        </div>
    )
}

export default AdminAnnouncements