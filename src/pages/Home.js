import React, { Component, useEffect, useState } from 'react'
import Layout from "../components/Layout"
import Produtocard from "../components/Produtocard"
import { produtosList } from "./Produtos/Dados"
// import produtosList, {fotografiasList} from "./AzureConnect"

class Home extends Component {
//   const [listaProdutos, setlistaProdutos] = useState([])
//   const [listaFotos, setlistaFotos] = useState([])

//   useEffect(() => {
//     const fetchData = async () => {
//       //buscar dados dos produtos da azure
//       const produtosData = await produtosList
//       // atualizar a lista de produtos
//       setlistaProdutos(produtosData)
//       // buscar dados das fotografias da azure
//       const fotografiasData = await fotografiasList
//       // atualizar lista de fotografias
//       setlistaFotos(fotografiasData)
//       // colocar lista de fotografias dos produtos
//       updateProdutoListWithFotografias()
//     }
//     fetchData();
//   }, [])

//   //atualizar a lista de fotografias de cada produto com as fotografias que vêm da tbaela das fotografias
//   const updateProdutoListWithFotografias = () => {
//     const updatedListaProduto = listaProdutos.map((produto) => {
//       const matchingFotografias = listaFotos.filter((fotografia) => fotografia.produtoFK === produto.id)
//       console.log('fotografias ',matchingFotografias)
//       const listaFotografias = matchingFotografias.map((fotografia) => fotografia.ficheiro)
//       return { ...produto, listaFotografias }
//     })
//     setlistaProdutos(updatedListaProduto)
//   }
  

//   const logs = () => {
//     console.log('listaProduto ', listaProdutos)
//     // console.log('listaFoto ', listaFotos)
//   }

//   return (
//     <>
//       <div className="home-background">
//         <Layout />
//         <h1>EasyMoto Home</h1>
//         <h4>Usufrui dos teus sonhos em segurança</h4>
//         {logs()}
//       </div>
      
//       <div className="home-products">
//         {listaProdutos
//           .sort((a, b) => b.quantidade - a.quantidade)
//           .slice(0, 4)
//           .map((produto, index) => (
//             <Produtocard key={index} produto={produto} />
//           ))}
//       </div>
//     </>
//   );
// };

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
      let produtosList2 = [];
      this.state.listaEasyMoto.forEach(produto =>
        produtosList2.push({produto})
      );
      console.log(produtosList2)


        return (
          <>
            <div className="home-background">
              <Layout />
              <h1>EasyMoto Home</h1>
              <h4>Usufrui dos teus sonhos em segurança</h4>
            </div>
            
            <div className="home-products">
              {produtosList
                .sort((a, b) => b.quantidade - a.quantidade).slice(0,4).map((produto) => (
                <Produtocard  key={produto.id} produto={produto}/>
              ))}

            </div>
          </>
        )
  }

}

export default Home;
