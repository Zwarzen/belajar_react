import React, { Component } from "react";
import "./BlogPost.css";
import ListProduk from "./ListProduk";

class ListProduk extends Component {
  state = {
    listProduk: [],
        insertProduk: {
            produkId: 1,
            id: 1,
            nama: "",
            harga: ""
    },
  };

  ambilDataDariSeverAPI = () => {
    fetch("http://localhost:3001/produk")
      .then((response) => response.json())
      .then((jsonHasilAmbilDariAPI) => {
        this.setState({
          listProduk: jsonHasilAmbilDariAPI,
        });
      });
  };

  componentDidMount() {
    this.ambilDataDariSeverAPI();
  }

  handleHapusProduk = (data) => {
    fetch(`http://localhost:3001/mahasiswa/${data}`, { method: "DELETE" }).then(
      (res) => {
        this.ambilDataDariSeverAPI();
      }
    );
  };

  handleTambahProduk = (event) => {
    let formInsertMahasiswa = { ...this.state.insertMahasiswa };
    let timestamp = new Date().getTime();
    formInsertMahasiswa["id"] = timestamp;
    formInsertMahasiswa[event.target.name] = event.target.value;
    this.setState({
      insertMahasiswa: formInsertMahasiswa,
    });
  };

  handleTombolSimpan = () => {
    fetch("http://localhost:3001/mahasiswa", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.insertMahasiswa),
    }).then((Response) => {
      this.ambilDataDariSeverAPI();
    });
  };

  render() {
    return (
      <div className="post-mahasiswa">
        <div className="form pb-2 border-bottom">
          <div className="form-gorup row">
            <label htmlFor="id" className="col-sm-2 col-form-label">
              ID Produk
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="id"
                name="id"
                onChange={this.handleTambahProduk}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="nama" className="col-sm-2 col-form-label">
              Nama Produk
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="nama"
                name="nama"
                onChange={this.handleTambahProduk}
              />
            </div>
          </div>
          
          <div className="form-group row">
            <label htmlFor="harga" className="col-sm-2 col-form-label">
              Harga
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="harga"
                name="harga"
                onChange={this.handleTambahProduk}
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleTombolSimpan}
          >
            Simpan
          </button>
        </div>
        <h2>Daftar Mahasiswa</h2>
        {this.state.listMahasiswa.map((mahasiswa) => {
          return (
            <Mahasiswa
              key={produk.id}
              nama={produk.nama}
              harga={produk.harga}
              idMahasiswa={produk.id}
              hapusMahasiswa={this.handleHapusProduk}
            />
          );
        })}
      </div>
    );
  }
}

export default ListProduk;