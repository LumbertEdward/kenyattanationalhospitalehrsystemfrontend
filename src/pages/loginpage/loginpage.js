import React from 'react'
import { LoginCard } from '../../components';
import './loginpage.css';

export default function Login() {
    return (
        <div className="container">
            <div className="column">
                <div className="card" >
                    <LoginCard />
                </div>
            </div>
        </div>
    )
}
