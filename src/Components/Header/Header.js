import React from 'react';
import Nav from './Nav';

function Header(props) {
     

    return (
        <div>
            <header>
                <h1>{props.data.site_name}</h1>
                <h2>{props.data.site_title}</h2>
                <Nav navig={props.data.nav}/>
            </header>

        </div>
    );
}

export default Header;
