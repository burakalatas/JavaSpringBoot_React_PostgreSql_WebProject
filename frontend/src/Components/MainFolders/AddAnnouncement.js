import React, { useState } from 'react';
import Swal from 'sweetalert2';

function AddAnnouncement() {
    const [subject, setSubject] = useState('')
    const [content, setContent] = useState('')
    const [validityDate, setValidityDate] = useState(null)
    const [file, setFile] = useState('')
    const [token] = useState(localStorage.getItem("token"))

    const handleClick = (e) => {
        if (subject !== '' && content !== '' && validityDate !== null && file !== '') {
            e.preventDefault()
            const announcement = new FormData()
            announcement.append('subject', subject)
            announcement.append('content', content)
            if (validityDate != null) {
                var date = new Date(validityDate)
                announcement.append('validityDate', date)
            }
            announcement.append('file', file)

            fetch("http://localhost:8080/admin/addannouncement", {
                method: "POST",
                body: announcement,
                headers: {
                    'Authorization': "Bearer " + token
                }

            }).then(() => {
                console.log("New Announcement added")
            })

            Swal.fire(
                'Tebrikler!',
                'Duyuru başarıyla eklendi',
                'success'
            ).then(function () {
                window.location.reload();
            });
        }
    }
    function handleFileChange(e) {
        if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
    }

    return (
        <div className='container'>
            <form>
                <div className="form-group">
                    <label>Konu</label>
                    <input type="text" onChange={(e) => setSubject(e.target.value)} class="form-control" placeholder="Konu giriniz" required="required" />
                </div>
                <div className="form-group">
                    <label>İçerik</label>
                    <input type="text" onChange={(e) => setContent(e.target.value)} class="form-control" placeholder="İçerik giriniz" required="required" />
                </div>
                <div className="form-group">
                    <label>Geçerlilik Tarihi</label>
                    <input type="date" onChange={(e) => setValidityDate(e.target.value)} class="form-control" required="required" />
                </div>
                <div className="form-group">
                    <label>Görsel</label>
                    <input type="file" onChange={handleFileChange} name='file' class="form-control" placeholder='görsel' required="required" />
                </div>

                <br />
                <button onClick={handleClick} type="submit" className="btn btn-primary">Ekle</button>
            </form>

        </div>
    )
}

export default AddAnnouncement