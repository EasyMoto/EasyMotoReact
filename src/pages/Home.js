import React, { Component } from 'react';
import Layout from "../components/Layout"
// import { produtosList } from "./Produtos/Dados"
import Produtocard from "../components/Produtocard"

class Home extends Component{
  state = { listaEasyMoto: [], dadosEasyMoto: null }

  componentDidMount() {
    this.getInitialData();
  }

  getInitialData() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://localhost:7230/api/ProdutosAPI", requestOptions)
    .then(res => res.json())
    .then(result => this.setState({ listaEasyMoto: result }))
    .catch(error => console.log('error', error));
  }

  render(){
    let produtosList = [];

    this.state.listaEasyMoto.forEach(produto =>
      produtosList.push({produto})
    );

    console.log(produtosList)

    return (
      <>
        <div className="home-background">
          <Layout />
          <h1>EasyMoto Home</h1>
          <h4>Usufrui dos teus sonhos em segurança</h4>
        </div>
        
        <div className="home-products">
          {produtosList
            .sort((a, b) => b.quantidade - a.quantidade).slice(0,4).map((item, index) => (
            <Produtocard  key={index} produto={item.produto}/>
          ))}
        </div>
      </>
    )
  }
  
}

export default Home
