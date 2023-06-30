import React, { useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Layout from '../components/Layout'
import { produtosList, icons, labels } from './Produtos/Dados'
import Produtocard from '../components/Produtocard';
import FiltrosProduto from '../components/FiltrosProduto';

const Produtos2 = () => {
  const [atualCategory, setActualCategory] = useState('top')
  const [filteredProdutos, setFilteredProdutos] = useState([])
  const marcas = produtosList.map((produto) => produto.marca)
  const colecoes = produtosList.map((produto) => produto.colecao)
  const cores = produtosList.map((produto) => produto.cor)
  const generos = produtosList.map((produto) => produto.genero)
  const tamanhos = produtosList.map((produto) => produto.tamanho)

  useEffect(() => {
    setFilteredProdutos([])
    const filtered = produtosList.filter((produto) => produto.categoria === atualCategory)
    setFilteredProdutos(filtered)
  }, [atualCategory])

  const convertToUpper = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)

  }

  const handleFiltros = (marcasF, colecoesF, coresF, generosF, tamanhosF, categoriaF) => {
    let filteredProdutos = produtosList.filter((produto) => produto.categoria === categoriaF.toLowerCase())

    //atenção aqui que ele cria um objecto e não um array, então o marcasF.lenght não funciona
    if(Object.keys(marcasF).length > 0) {
      filteredProdutos = filteredProdutos.filter((produto) => marcasF.includes(produto.marca))
    } 
    if(Object.keys(colecoesF).length > 0) {
      filteredProdutos = filteredProdutos.filter((produto) => colecoesF.includes(produto.colecao))
    } 
    if(Object.keys(coresF).length > 0) {
      filteredProdutos = filteredProdutos.filter((produto) => coresF.includes(produto.cor))
    } 
    if(Object.keys(generosF).length > 0) {
      filteredProdutos = filteredProdutos.filter((produto) => generosF.includes(produto.genero))
    } 
    if(Object.keys(tamanhosF).length > 0) {
      filteredProdutos = filteredProdutos.filter((produto) => tamanhosF.includes(produto.tamanho))
    } 

    setFilteredProdutos(filteredProdutos)
  }
  

  const showCategory = (categoryId) => {
    switch(categoryId){
      case 1: setActualCategory('botas')
      break
      case 2: setActualCategory('luvas')
      break
      case 3: setActualCategory('capacetes')
      break
      case 4: setActualCategory('casacos')
      break
      case 5: setActualCategory('calcas')
      break
      default: setActualCategory('top')
    }
  }

  return (
    <>
      <div className="produtos-background">
        <Layout />
        <h1>EasyMoto Home</h1>
        <h4>Usufrui das nossas categorias</h4>
        <Container  fluid className='icon-container'>
        <Row className="justify-content-md-center">
          {icons.map((icon) => (
            <Col key={icon.id} xs='2' md='2' lg="1">
              <Image className='icons' src={icon.src} onClick={() => showCategory(icon.id)}/>
            </Col>
          ))}
        </Row>
      </Container>
      </div>
        <div >
          <FiltrosProduto categoria={convertToUpper(atualCategory)}
          labels={labels} 
          marcas={marcas} 
          colecoes={colecoes} 
          cores={cores}
          generos={generos}
          tamanhos={tamanhos}
          handleFiltros={handleFiltros}/>
        </div>
        <div className="home-products">
          {atualCategory !== 'top'? 
          (filteredProdutos.map((produto) => (<Produtocard key={produto.id} produto={produto}/>))) : 
          (produtosList
            .sort((a, b) => b.quantidade - a.quantidade).slice(0,4).map((produto) => (
            <Produtocard  key={produto.id} produto={produto}/>
          )))}
          
        </div>
    </>
  )
}

export default Produtos2
