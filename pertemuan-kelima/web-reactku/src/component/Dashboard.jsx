import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route, useHistory, Redirect, useLocation } from "react-router-dom";
import './Data.css';

class Produk extends Component {
    render() {
        return (
            <div>
                <Router>
                <section className="section-products">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-md-8 col-lg-12">
                                <div className="header">
                                    <center><h2><Link to="/newprod">Produk Terbaru</Link> || <Link to="/onsale">Produk Terpopuler</Link></h2></center>
                                </div>
                            </div>
                        </div>
                        <Switch>
                            <Route exact path="/">
                                <NewProd/>
                            </Route>
                            <Route path="/newprod">
                                <NewProd/>
                            </Route>
                            <Route path="/onsale">
                                <OnSale/>
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

function NewProd(){
    return(
        <div className="row">
            <Item number="product-1" name="Headset" price="250.000" image="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//101/MTA-7557356/jete_headset_gaming_g1_jete_full01_c4o2r9xg.jpg" />
            <Item number="product-2" name="Headphone" price="150.000" image="https://static.bmdstatic.com/gk/production/7466bac218f43b7551ea09027d9f5d26.png" />
            <Item number="product-3" name="Monitor" price="350.000" image="https://cms.hybrid.co.id/wp-content/uploads/2021/09/a142751e9b7aef8dcfc36b5fb3dcb65e_aoc-24g2-02.jpg" />
        </div>
    )
}

function OnSale(){
    return(
        <div className="row">
            <Item number="product-1" name="Handphone" price="1.500.000" image="https://id.sharp/sites/default/files/2020-06/r3.png" />
            <Item number="product-2" name="Laptop" price="28.000.000" image="https://selular.id/wp-content/uploads/2019/12/2018-MacBook-Pro-001-768x426-1-696x386.jpg" />
            <Item number="product-3" name="Hardisk" price="500.000" image="https://images.tokopedia.net/img/cache/500-square/product-1/2016/11/8/44049946/44049946_4f1abe75-16df-4ca9-8e8e-dae11be1653e.png" />
        </div>
    )
}

const Item = (props) => {
    return (
        <div className="col-md-6 col-lg-4 col-xl-3">
            <div id={props.number} className="single-product">
                <div className="part-1" style={{ background: `url('${props.image}') center no-repeat`}}></div>
                <div className="part-2">
                    <center><h3 className="product-title">{props.name}: Rp{props.price}</h3></center>
                </div>
            </div>
        </div>
    )
}