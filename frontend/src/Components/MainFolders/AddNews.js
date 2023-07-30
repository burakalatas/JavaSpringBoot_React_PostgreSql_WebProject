import React, { useState } from 'react';
import Swal from 'sweetalert2';

function AddNews() {
    const [subject, setSubject] = useState('')
    const [content, setContent] = useState('')
    const [validityDate, setValidityDate] = useState('')
    const [newsAddress, setNewsAddress] = useState('')

    const handleClick = (e) => {
        if (subject !== '' && content !== '' && validityDate !== '' && newsAddress !== '') {
            e.preventDefault()
            const newss = { subject, content, validityDate, newsAddress }
            fetch("http://localhost:8080/admin/addnews", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newss)

            }).then(() => {
                console.log("New News added")
            })
            Swal.fire(
                'Tebrikler!',
                'Haber başarıyla eklendi',
                'success'
            ).then(function () {
                window.location.reload();
            })
        }
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
                    <input type="date" onChange={(e) => setValidityDate(e.target.value)} class="form-control"
                        required="required" />
                </div>
                <div className="form-group">
                    <label>Haber Linki</label>
                    <input type="text" onChange={(e) => setNewsAddress(e.target.value)} class="form-control" placeholder='Haber Linki' required="required" />
                </div>

                <br />
                <button onClick={handleClick} type="submit" className="btn btn-primary">Ekle</button>
            </form>

        </div>
    )
}

export default AddNews