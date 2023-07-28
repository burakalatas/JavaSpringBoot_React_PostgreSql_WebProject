import React, { useEffect, useState } from 'react';
import '../../custom.css';
import Swal from 'sweetalert2';

function Announcement() {
    const [announcement, setAnnouncement] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/user/announcement")
            .then(res => res.json())
            .then((result) => {
                setAnnouncement(result);
            }
            )
    }, [])

    const popup = (item) => async () => {

        Swal.fire({
            title: item.subject,
            text: item.content,
            imageUrl: item.image,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            confirmButtonText: 'Kapat',

    })
}


    return (
        <div>
            <table class="table table-hover">
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
                        <td>{item.image}</td>
                    </tr>
                    ))}
                </tbody>
            </table>


        </div>
    )
}

export default Announcement