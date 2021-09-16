import React from 'react'
import { Loading } from '../../components'
import './loading.css'

export default function LoadingPage({type, color}) {
    return (
        <div className="container">
            <div className="loadingouter"> 
                <Loading type={type} color={color} className="loadingicon"/>
            </div>
        </div>
    )
}
