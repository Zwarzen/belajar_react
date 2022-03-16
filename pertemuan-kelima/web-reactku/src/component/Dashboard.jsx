import React, { Component } from "react";
 
class Dashboard extends Component {
  render() {
    return (
      <div className="post-artikel">
          <h2>On Sale</h2>
          <div className="artikel-sale">
              <div className="gambar-artikel">
                  <img src="http://placeimg.com/80/80/tech" alt="Gambar Thumbnail Artikel" />
              </div>
              <div className="konten-sale">
                  <div className="judul-artikel">Judul Artikel</div>
                  <p className="isi-artikel">Isi Artikel</p>
              </div>
          </div>
      </div>
    );
  }
}
 
export default Dashboard;