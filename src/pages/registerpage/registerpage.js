import React from 'react'
import { Register } from '../../components'
import './registerpage.css';

export default function RegisterPage() {
    return (
        <div className="container">
            <div className="column">
                <div className="cardRegister" >
                    <Register />
                </div>
            </div>
        </div>
    )
}
