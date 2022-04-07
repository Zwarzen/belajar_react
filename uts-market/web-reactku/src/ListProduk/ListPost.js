import React, { Component } from "react";
import './BlogPost.css';
import ListPost from "./ListPost";

class ListPost extends Component{
state = {
        listProduk: [],
        insertProduk: {
            produkId: 1,
            id: 1,
            nama: "",
            harga: ""
        }
    }

    getData = () => {
        fetch('http://localhost:3001/posts')
            .then(response => response.json())
            .then(result => {
                this.setState({
                    listProduk: result
                })
            })
    }

    handleHapusProduk = (data) => {
        fetch(`http://localhost:3001/posts/${data}`, { method: 'DELETE' })
            .then(() => {
                this.getData()
            })
    }

    handleFormProduk = (event) => {
        let formInsertProduk = { ...this.state.insertProduk }
        let timestamp = new Date().getTime()
        formInsertProduk['id'] = timestamp
        formInsertProduk[event.target.name] = event.target.value
        this.setState({
            insertProduk: formInsertProduk
        })
    }

    handleTambahProduk = () => {
        fetch('http://localhost:3001/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertProduk)
        })
            .then((response) => {
                this.getData()
            })
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <div className="post-produk">
                <div className="form pb-2 border-bottom">
                    <div className="form-group-row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="title" id="title" onChange={this.handleFormProduk} />
                        </div>
                    </div>
                    <div className="form-group-row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea name="body" id="body" rows="3" onChange={this.handleFormProduk}></textarea>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={this.handleTambahProduk}>Tambah</button>
                </div>

                <h2>Daftar Produk</h2>
                {
                    this.state.listProduk.reverse().map(produk => {
                        return <Post key={produk.id} judul={produk.nama} isi={produk.harga} idProduk={produk.id} hapusProduk={this.handleHapusProduk} />
                    })
                }
            </div>
        )
    }
}

export default ListPost;