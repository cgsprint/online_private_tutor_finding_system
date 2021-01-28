import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Link, Route , Redirect} from "react-router-dom";


export class Logout extends Component {

    constructor(props) {
        super(props)
    
        localStorage.removeItem('token')
        const role = localStorage.getItem('role');
        if(role === 'admin')
        {
            localStorage.removeItem('adminObj')
        }
        else if(role === 'tutor')
        {
            localStorage.removeItem('tutorObj')
        }
        else if(role === 'parent')
        {
            localStorage.removeItem('parentObj')
        }

        localStorage.removeItem('role')

       
    }

    componentDidMount()
    {
        window.location.href = 'http://localhost:3000/';

    }
    
    
    render() {
        return (
            <div>
                <h1 class="text-light">Redirecting to login page</h1>
                
            </div>
        )
    }
}

export default Logout

