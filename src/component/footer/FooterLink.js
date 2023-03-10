import React from 'react';
import { Link } from 'react-router-dom';

const FooterLink = (props) => {
    return (
        <div>
            <li><Link to={props.url}>{props.linkName}</Link></li>
        </div>
    );
}

export default FooterLink;
