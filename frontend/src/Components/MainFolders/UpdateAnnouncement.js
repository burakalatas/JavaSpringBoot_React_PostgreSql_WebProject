import React, { useState , useEffect } from 'react';
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';

function AddAnnouncement() {
    const params = useParams();

    const [announcement, setAnnouncement] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/admin/findannouncementbyid?id=${params.id}`)
            .then(res => res.json())
            .then((result) => {
                setAnnouncement(result);
            }
            )
    })

    const[id,setId]=useState(params.id)
    const[subject,setSubject]=useState('')
    const[content,setContent]=useState('')
    const[validityDate,setValidityDate]=useState(null)
    const [file, setFile] = useState('')

    const handleClick=(e)=>{
        e.preventDefault()
        const announcement = new FormData()
        announcement.append('id', id)
        announcement.append('subject', subject)
        announcement.append('content', content)
        if(validityDate!=null){
            var date = new Date(validityDate)
            announcement.append('validityDate', date)
        }
        announcement.append('file', file)

        fetch("http://localhost:8080/admin/updateannouncement", {
            method: "POST",
            body: announcement

        }).then(()=>{
        Swal.fire(
            'Tebrikler!',
            'Duyuru başarıyla güncellendi',
            'success'
        ).then(function () {
            window.location.reload();
        });
      })
    }

    function handleFileChange(e) {
        if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
      }

    return (
        <div className='container'>
            <form>
                <input hidden value={id} onChange={(e)=>setId(e.target.value)}/>
                <div className="form-group">
                    <label>Konu</label>
                    <input type="text" defaultValue={announcement.subject} onChange={(e)=>setSubject(e.target.value)} class="form-control" placeholder="Konu giriniz"/>
                </div>
                <div className="form-group">
                    <label>İçerik</label>
                    <input type="text" defaultValue={announcement.content} onChange={(e)=>setContent(e.target.value)} class="form-control" placeholder="İçerik giriniz"/>
                </div>
                <div className="form-group">
                    <label>Geçerlilik Tarihi</label>
                    <input type="date" defaultValue={announcement.validityDate} onChange={(e)=>setValidityDate(e.target.value)} class="form-control"/>
                </div>
                <div className="form-group">
                    <label>Görsel</label>
                    <input type="file" onChange={handleFileChange} name='file' class="form-control" placeholder='görsel' />
                </div>

                <br/>
                <button onClick={handleClick} type="submit" className="btn btn-primary">Güncelle</button>
            </form>

        </div>
    )
}

export default AddAnnouncement