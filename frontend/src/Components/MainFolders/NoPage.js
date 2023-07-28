import React from 'react'
import { Link } from 'react-router-dom'

export default function NoPage() {
    return (
        <div>
            <div style={{ textAlign: "center", marginTop: "20%" }}>Kayboldun 👇</div>
            <div style={{ margin: "auto", width: "167px", paddingTop: "3px" }}>
                <Link to="/" id='goHome' className='makeDark' >Ana Sayfaya Dön</Link>
            </div>
        </div >
    )
}