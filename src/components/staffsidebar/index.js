import React from 'react'
import {Bars} from './bars';
import './staffsidebar.css';

export default function StaffSidebar() {
    return (
        <div className="sideB">
            <ul className="sideList">
                {Bars.map((val, key) => {
                    return <li key={key} onClick={() => {window.location.pathname = val.link}} className="listItm" >
                        <div className="iconLst">{val.icon}</div>
                        <div className="titleLst">{val.title}</div>
                    </li>
                })}
            </ul>
        </div>
    )
}
