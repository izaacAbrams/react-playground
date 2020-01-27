import React from 'react';


export default function Messages(props) {
    const badge = props.unread
    ? <div className="unread_count">{props.unread}</div>
    : null;
    return (
        <div className="messages">
            {props.name}
            {badge}
        </div>
    )
}