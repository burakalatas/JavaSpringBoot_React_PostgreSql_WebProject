import React from 'react'

import Navbar from './userNavbar';

function userLayout({ children }) {
    return (
        <div>
            <Navbar />

            <main>{children}</main>
        </div>
    )
}

export default userLayout