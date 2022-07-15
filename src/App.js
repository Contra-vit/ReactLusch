import React from 'react';
import './App.css';
import Header from '../src/Components/Header/Header';
import Main from '../src/Components/Main/Main';
// import Sidebar from '../src/Components/Main/Sidebar';
import Footer from '../src/Components/Footer/Footer';

const site = {
	site_name : "react test",
	site_title : "my first site with react",
	nav : [
    { "link": "nav1", "text": "my link" },
    { "link": "nav2", "text": "my link 2" },
    { "link": "nav3", "text": "my link 3" },
  ]
}

function App() {

  return (
    <>
    <Header data ={site}/>

    <Main/>

    <Footer data ={site}/>
    </>
  );
}

export default App;
