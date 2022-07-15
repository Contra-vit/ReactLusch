import React from 'react';
// import Header from './Header';


function Nav(props) {
    // let datay = [];
    //  data = setTimeout(() => {
    //     console.log(console.log('hi'))
    //   }, 1000) ;
    // console.log(props.navig[1].link)
    let data = props.navig
    // console.log(data)
    const listItem = data && data.map( (item) => <li key = {item.link}><a   href={item.link}>{item.text}</a></li>);
    return (
        <div>
            <nav>
                <ul className="main-navigation">
                    {listItem}
                </ul>
            </nav>


        </div>
    );




}

export default Nav;