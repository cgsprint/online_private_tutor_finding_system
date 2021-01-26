import React from 'react'

function AdminHome() {

    const adminObject = localStorage.getItem('adminObj');

    console.log("adminObject ",adminObject);
    return (
        <div>
            <h2>Welcome, {JSON.parse(adminObject).adminName}</h2>
        </div>
    )
}

export default AdminHome
