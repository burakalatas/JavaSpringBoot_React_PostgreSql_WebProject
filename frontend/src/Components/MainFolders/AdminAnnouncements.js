import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function AdminAnnouncements() {
    const [announcement, setAnnouncement] = useState([])

    const [token] = useState(localStorage.getItem("token"))

    useEffect(() => {
        fetch("http://localhost:8080/user/announcement", {
            method: "GET",
            contentType: "application/json",
            headers: {
                'Authorization': "Bearer " + token
            }
        }).then(res => res.json())
            .then((result) => {
                setAnnouncement(result);
            }
            )
    }, [token])

    const del = (id) => async () => {

        await fetch(`http://localhost:8080/admin/deleteannouncement?id=${id}`, {
            method: "DELETE",
            body: JSON.stringify(id),
            headers: {
                'Authorization': "Bearer " + token
            }

        }).then(() => {
            Swal.fire(
                'Tebrikler!',
                'Duyuru başarıyla silindi',
                'success'
            ).then(function () {
                window.location.reload();
            });
        })
    }

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Konu</th>
                        <th scope="col">İçerik</th>
                        <th scope="col">Geçerlilik Tarihi</th>
                        <th scope="col">Duyuru Görseli</th>
                        <th scope="col">Güncelle</th>
                        <th scope="col">Sil</th>
                    </tr>
                </thead>
                <tbody>
                    {announcement.map((item) => (
                        <tr key={item.id}>
                            <th scope="row">{item.id != null ? item.id : ""}</th>
                            <td>{item.subject != null ? item.subject : ""}</td>
                            <td>{item.content != null ? item.content : ""}</td>
                            <td>{item.validityDate != null ? item.validityDate : ""}</td>
                            <td><img src={require(`../../../../backend/src/main/resources/static/images/${item.image}`)} style={{ width: "40px", height: "40px", borderRadius: "50px" }} alt="photoooo"></img></td>
                            <td><Link className='btn btn-warning' to={{ pathname: `/Admin/UpdateAnnouncement/${item.id}` }}>Güncelle</Link></td>
                            <td><button type="button" onClick={del(item.id)} class="btn btn-danger">Sil</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    )
}

export default AdminAnnouncements