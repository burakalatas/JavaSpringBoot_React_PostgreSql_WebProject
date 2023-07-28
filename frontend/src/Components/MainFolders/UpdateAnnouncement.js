import React, { useState , useEffect } from 'react';
import { useParams } from "react-router-dom";

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
    const[validityDate,setValidityDate]=useState('')
    const[image,setImage]=useState('')

    const handleClick=(e)=>{
        e.preventDefault()
        const announcement={id,subject,content,validityDate,image}
        fetch("http://localhost:8080/admin/updateannouncement",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(announcement)
    
      }).then(()=>{
        console.log("Announcement updated")
      })
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
                    <input type="text" defaultValue={announcement.image} onChange={(e)=>setImage(e.target.value)} class="form-control" placeholder='görsel'/>
                </div>

                <br/>
                <button onClick={handleClick} type="submit" className="btn btn-primary">Ekle</button>
            </form>

        </div>
    )
}

export default AddAnnouncement