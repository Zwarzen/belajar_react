import React, { Component } from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/post";

class BlogPostMahasiswa extends Component{
    state = {
        listMahasiswa: [],
        insertMahasiswa: {
            userId: 1,
            nim: 180823453,
            nama: "",
            alamat: "",
            hp: '',
            angkatan: '',
            status: "aktif"
        }
    }

    getData = () => {
        fetch('http://localhost:3001/posts')
            .then(response => response.json())
            .then(result => {
                this.setState({
                    listMahasiswa: result
                })
            })
    }

    handleHapusMahasiswa = (data) => {
        fetch(`http://localhost:3001/posts/${data}`, { method: 'DELETE' })
            .then(() => {
                this.getData()
            })
    }

    handleFormMahasiswa = (event) => {
        let formInsertMahasiswa = { ...this.state.insertMahasiswa }
        let timestamp = new Date().getTime()
        formInsertMahasiswa['id'] = timestamp
        formInsertMahasiswa[event.target.name] = event.target.value
        this.setState({
            insertMahasiswa: formInsertMahasiswa
        })
    }

    handleTambahMahasiswa = () => {
        fetch('http://localhost:3001/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertMahasiswa)
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
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group-row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="title" id="title" onChange={this.handleFormMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group-row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea name="body" id="body" rows="3" onChange={this.handleFormMahasiswa}></textarea>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={this.handleTambahMahasiswa}>Tambah</button>
                </div>

                <h2>Daftar Mahasiswa</h2>
                {
                    this.state.listMahasiswa.reverse().map(mahasiswa => {
                        return <Post key={mahasiswa.nim} nama={mahasiswa.name} alamat={mahasiswa.alamat} idMahasiswa={mahasiswa.nim} hpMahasiswa={mahasiswa.nama} angkatanMahasiswa={mahasiswa.angkatan} statusMahasiswa={mahasiswa.status} hapusMahasiswa={this.handleHapusMahasiswa} />
                    })
                }
            </div>
        )
    }
}

export default BlogPostMahasiswa;