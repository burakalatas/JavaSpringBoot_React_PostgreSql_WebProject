import React, { useState } from 'react';
import Swal from 'sweetalert2';

function AddAnnouncement() {
    const [subject, setSubject] = useState('')
    const [content, setContent] = useState('')
    const [validityDate, setValidityDate] = useState('')
    const [file, setFile] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        const announcement = new FormData()
        announcement.append('subject', subject)
        announcement.append('content', content)
        var date = new Date(validityDate);
        announcement.append('validityDate', date)
        announcement.append('file', file)

        fetch("http://localhost:8080/admin/addannouncement", {
            method: "POST",
            body: announcement

        }).then(() => {
            console.log("New Announcement added")
        })

        

        Swal.fire(
            'Tebrikler!',
            'Duyuru başarıyla eklendi',
            'success'
        )
    }
    function handleFileChange(e) {
        if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
      }

    return (
        <div className='container'>
            <form>
                <div className="form-group">
                    <label>Konu</label>
                    <input type="text" onChange={(e) => setSubject(e.target.value)} class="form-control" placeholder="Konu giriniz" />
                </div>
                <div className="form-group">
                    <label>İçerik</label>
                    <input type="text" onChange={(e) => setContent(e.target.value)} class="form-control" placeholder="İçerik giriniz" />
                </div>
                <div className="form-group">
                    <label>Geçerlilik Tarihi</label>
                    <input type="date" onChange={(e) => setValidityDate(e.target.value)} class="form-control" />
                </div>
                <div className="form-group">
                    <label>Görsel</label>
                    <input type="file" onChange={handleFileChange} name='file' class="form-control" placeholder='görsel' />
                </div>

                <br />
                <button onClick={handleClick} type="submit" className="btn btn-primary">Ekle</button>
            </form>

        </div>
    )
}

export default AddAnnouncement