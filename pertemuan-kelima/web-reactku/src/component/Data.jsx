import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import './Data.css';
class Produk extends Component {
    render() {
        return (
            <div>
                <Router>
                <section className="section-products">
                    <div className="container">
                        <div className="header">            
                            <h2> <Link to="/other">Produk Lainnya</Link></h2>
                        </div>
                        <Switch>
                            <Route exact path="/other">
                                <Random/>
                            </Route>
                            <Route path="/other">
                                <Random/>
                            </Route>
                        </Switch>
                    </div>
                </section>
                <hr />
                </Router>
            </div>
        )
    }
}

export default Produk;

function Random(){
    return(
        <div className="row">
            <Item number="product-1" name="Books" price="300.000" image="https://cdn.pixabay.com/photo/2017/01/31/00/09/book-2022464_960_720.png"/>
            <Item number="product-2" name="PC" price="28.000.000" image="https://static.bmdstatic.com/pk/product/large/5da05012a3f29.jpg" />
            <Item number="product-3" name="Sound Speaker" price="1.400.000" image="https://cdn.pixabay.com/photo/2020/01/03/08/18/speaker-4737580_1280.jpg" />
            <Item number="product-4" name="Microphone 7.1" price="750.000" image="https://www.jagatreview.com/wp-content/uploads/2021/11/Review-Razer-Seiren-V2-pro-4.jpg" />
        </div>
    )
}

const Item = (props) => {
    return (
        <div className="col-md-6 col-lg-4 col-xl-3">
            <div id={props.number} className="single-product">
                <div className="part-1" style={{ background: `url('${props.image}') no-repeat`, width: '100%' }}></div>
                <div className="part-2">
                    <h3 className="product-title">{props.name}: Rp{props.price}</h3>
                </div>
            </div>
        </div>
    )
}