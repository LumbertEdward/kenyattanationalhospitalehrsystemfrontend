import React from 'react'
import './toolbar.css';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function Toolbar() {
    function notificationsLabel(count) {
        if (count === 0) {
          return 'no notifications';
        }
        if (count > 99) {
          return 'more than 99 notifications';
        }
        return `${count} notifications`;
      }
    return (
        <div className="toolContainer">
            <div className="side">
                <div className="logo">
                    <img src="/knhlogo.jpg" className="logoDash"/>
                    <p>Welcome Admin</p>
                </div>
            </div>
            <div className="center">
                <div className="search">
                    <p>SearchHere</p>
                </div>
                <div className="rightIcons">
                    <IconButton aria-label={notificationsLabel(100)}>
                        <Badge badgeContent={100} color="secondary">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    
                </div>
            </div>
        </div>
    )
}
