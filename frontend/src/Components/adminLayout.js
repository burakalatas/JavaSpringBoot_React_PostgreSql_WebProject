import React from 'react'

import Navbar from './adminNavbar';

function adminLayout({ children }) {
    return (
        <div>
            <Navbar />

            <main>{children}</main>
        </div>
    )
}

export default adminLayout

