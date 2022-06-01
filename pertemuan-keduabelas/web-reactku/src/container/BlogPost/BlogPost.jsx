import React, { Component } from "react";
import Post from "../../components/Post";
import './BlogPost.css';
// import API from "../../services";
import firebase from "../../firebase";
import firebaseConfig from "../../firebase/config";

class BlogPost extends Component {

    constructor(props) {
        super(props);
        firebase.initializeApp(firebaseConfig);

        this.state = {
            listArtikel: []
        }
    }

    ambilDataDariServerAPI = () => {
        let ref = firebase.database().ref("/");
        ref.on("value", snapshot => {
            const state = snapshot.val();
            this.setState(state);
        })
    }

    simpanDataDariServerAPI = () => {
        firebase.database()
        .ref("/")
        .set(this.state);
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state){
            this.simpanDataDariServerAPI();
        }
    }

    handleHapusArtikel = (idArtikel) => {
        const {listArtikel} = this.state;
        const newState = listArtikel.filter(data => {
            return data.uid !== idArtikel;
        });
        this.setState({listArtikel: newState});
    }

    // handleTombolSimpan = () => {

    //     this.refs.judulArtikel.value = "";
    //     this.refs.isiArtikel.value = "";
    //     this.refs.uid.value = "";

    // }

    handleTombolSimpan = (event) => {
        let title = this.refs.judulArtikel.value;
        let body = this.refs.isiArtikel.value;
        let uid = this.refs.uid.value;

        if(uid && title && body) {
            const { listArtikel } = this.state;
            const indeksArtikel = listArtikel.findIndex(data => {
                return data.uid === uid;
            });

            listArtikel[indeksArtikel].title = title;
            listArtikel[indeksArtikel].body = body;
            this.setState({ listArtikel });
        }

        this.refs.judulArtikel.value = "";
        this.refs.isiArtikel.value = "";
        this.refs.uid.value = "";
    }
    
    

    render() {
        return (
            <div className="post-artikel">
                <div className='form pb-2 border-bottom'>
                    <div className='form-group row'>
                        <label htmlFor="title" className='col-sm-2 col-form-label'>Judul</label>
                        <div className='col-sm-10'>
                            <input type="text" className="form-control" id="title" name="title" ref="judulArtikel" />
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label htmlFor="body" className='col-sm-2 col-form-label'>Isi</label>
                        <div className='col-sm-10'>
                            <textarea className='form-control' id='body' name='body' rows='3' ref="isiArtikel"></textarea>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary' onClick={this.handleTombolSimpan}>Simpan</button>
                </div>

                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => {
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel} />
                    })
                }
            </div>
        )
    }
}

export default BlogPost;