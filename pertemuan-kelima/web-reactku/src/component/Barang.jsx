import React from "react";

const Barang = (props) => {
  return (
    <div className="barang">
      <div className="gambar-barang">
        <img
          src="https://placeimg.com/80/80/tech"
          alt="Gambar Thumbnail Barang"
        />
      </div>
      <div className="konten-barang">
        <div className="nama-barang">{props.nama}</div>
        <p className="hp-barang">Stok: {props.stok}</p>
        <p className="status-barang">Status: {props.status}</p>
        <button
          className="btn btn-sm btn-warning"
          onClick={() => props.hapusBarang(props.idBarang)}
        >
          Hapus
        </button>
      </div>
    </div>
  );
};

export default Barang;