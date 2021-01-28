import React from 'react'

import '../foot.css'

const Footer=()=>{
    return(
        
        <div className="main-footer">
            <div className="container">
                <div className="row">
                <div className="col">
                    <h2>Linked Schools</h2>
                    <ul className="list-unstyled">
                        <li>Sahyog School</li>
                        <li>vVidya Mandir </li>
                        <li>Bharti Vidyapeeth</li>
                    </ul>
                </div>
                <div className="col">
                    <h2>Contact us</h2>
                    <ul className="list-unstyled">
                    <li>Phone Number:7894563251</li>
                        <li>Email Id:abc@gmail.com</li>
                        <li>Email Id:Mnc@gmail.com</li>
                    </ul>
                </div>
                </div>
                <hr/>
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear} All rights reserved!
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default Footer