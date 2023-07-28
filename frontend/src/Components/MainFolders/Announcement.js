import React, { useEffect, useState } from 'react';

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
                    {announcement.map((item) => (
                    <tr key={item.id}>
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