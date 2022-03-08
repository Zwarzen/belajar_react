import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import List from "./List";
//Component menggunakan function
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <h1>component dari Class App</h1>
        <List/>
        <Footer judul = 'Halaman Footer' nama='Risang'>
        </Footer>
      </div>
    )
  }
}

/* const Footer = (props) => {
    return(
        <div>
            <h3>Halaman Footer</h3>
            <h3>Component ini dibuat menggunakan function, bukan class</h3>
            <p>Nilai ini ditampilkan dari props: {props.judul}</p>
            <p>Nama saya: {props.nama}</p>
        </div>
    );
}*/

export default Footer;