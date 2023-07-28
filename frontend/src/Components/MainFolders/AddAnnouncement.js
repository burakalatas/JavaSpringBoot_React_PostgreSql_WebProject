import React, { useState } from 'react';

function AddAnnouncement() {
    const[subject,setSubject]=useState('')
    const[content,setContent]=useState('')
    const[validityDate,setValidityDate]=useState('')
    const[image,setImage]=useState('')

    const handleClick=(e)=>{
        e.preventDefault()
        const announcement={subject,content,validityDate,image}
        fetch("http://localhost:8080/admin/addannouncement",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(announcement)
    
      }).then(()=>{
        console.log("New Announcement added")
      })
    }

    return (
        <div className='container'>
            <form>
                <div className="form-group">
                    <label>Konu</label>
                    <input type="text" onChange={(e)=>setSubject(e.target.value)} class="form-control" placeholder="Konu giriniz"/>
                </div>
                <div className="form-group">
                    <label>İçerik</label>
                    <input type="text" onChange={(e)=>setContent(e.target.value)} class="form-control" placeholder="İçerik giriniz"/>
                </div>
                <div className="form-group">
                    <label>Geçerlilik Tarihi</label>
                    <input type="date" onChange={(e)=>setValidityDate(e.target.value)} class="form-control"/>
                </div>
                <div className="form-group">
                    <label>Görsel</label>
                    <input type="text" onChange={(e)=>setImage(e.target.value)} class="form-control" placeholder='görsel'/>
                </div>

                <br/>
                <button onClick={handleClick} type="submit" className="btn btn-primary">Ekle</button>
            </form>

        </div>
    )
}

export default AddAnnouncement