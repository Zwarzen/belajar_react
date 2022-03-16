import React from "react";

const Post = (props) => {
    return (
        <div className="artikel">
            <div className="gambar-artikel">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar thumbnail Barang" />
            </div>
            <div className="konten-artikel">
                <div className="judul-artikel">{props.nama}</div>
                <p className="isi-artikel">{props.stok}</p>
                <p className="status-artikel">{props.status}</p>
                <button className="btn btn-sm btn-warning" onClick={() => props.hapusBarang(props.idBarang)}>Hapus</button>
            </div>
        </div>
        )
}

export default Post;