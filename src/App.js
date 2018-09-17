import React, { Component } from 'react';
import Header from './components/Header';
import SideBar from './components/Sidebar';
import Content from './components/Content';
import SidebarRight from './components/SidebarRight';
import Footer from './components/Footer';

//import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SideBar />
        <Content />
        <Footer />
        <SidebarRight />
        <div className="control-sidebar-bg"></div>
      </div>
    );
  }
}

export default App;
