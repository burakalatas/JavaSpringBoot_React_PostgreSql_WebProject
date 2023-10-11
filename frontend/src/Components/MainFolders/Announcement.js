import React, { useEffect, useState } from 'react';
import '../../custom.css';
import Swal from 'sweetalert2';

function Announcement() {
    const [token] = useState(localStorage.getItem("token"))
    const [announcement, setAnnouncement] = useState([])

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

    const popup = (item) => async () => {

        Swal.fire({
            title: item.subject,
            text: item.content,
            imageUrl: require(`../../../../backend/src/main/resources/static/images/${item.image}`),
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            confirmButtonText: 'Kapat',

        })
    }
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Konu</th>
                        <th scope="col">Geçerlilik Tarihi</th>
                        <th scope="col">Duyuru Görseli</th>
                    </tr>
                </thead>
                <tbody>
                    {announcement.map((item) => (
                        <tr key={item.id} onClick={popup(item)}>
                            <td>{item.subject}</td>
                            <td>{item.validityDate}</td>
                            <td><img src={require(`../../../../backend/src/main/resources/static/images/${item.image}`)} style={{ width: "40px", height: "40px", borderRadius: "50px" }} alt="photoooo"></img></td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    )
}

export default Announcement