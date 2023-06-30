import React, { useState } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import TableList from '../components/TableList';
import EditarProduto from '../components/EditarProduto';
import ApagarProduto from '../components/ApagarProduto';
import DetalhesProduto from '../components/DetalhesProduto';
import CriarProduto from '../components/CriarProduto';
import {labels, produtosList} from '../pages/Produtos/Dados';

const Produtos = () => {
  const [produtos, setProdutos] = useState(produtosList);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibleCreate, setVisibleCreate] = useState(false);
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [visibleDetails, setVisibleDetails] = useState(false);
  const [editableProduct, setEditedProduto] = useState({
    id: 0,
    nome: '',
    preco: '',
    descricao: '',
    tamanho: '',
    genero: '',
    cor: '',
    colecao: '',
    categoria: '',
    marca: '',
    utilizador: '',
  });

  const toggleVisibilityDelete = (product) => {
    setEditedProduto(product);
    setVisibleDelete(prevState => !prevState);
  }

  const toggleVisibilityEdit  = (product) => {
    setEditedProduto(product);
    setVisibleEdit(prevState => !prevState);
  }

  const toggleVisibilityCreate  = () => {
    setVisibleCreate(prevState => !prevState);
  }

  const toggleVisibilityDetails  = (product) => {
    setEditedProduto(product);
    setVisibleDetails(prevState => !prevState);
  }

  const handleCriarProduto = (produto) => {
    console.log(produtos.length);
    const novoProduto = {
      id: produtos.length + 1,
      ...produto,
    };
    setProdutos([...produtos, novoProduto]);
    setVisibleCreate(prevState => !prevState);
  };

  const handleEditarProduto = (editedProduct) => {
    console.log('Editar Produto')
    setProdutos((prevProdutos) => {
      const updatedProdutos = prevProdutos.map((produto) => {
        if (produto.id === editedProduct.id) {
          return editedProduct;
        }
        return produto;
      });
      return updatedProdutos;
    });
    setVisibleEdit(prevState => !prevState);
  };

  const handleApagarProduto = (produto) => {
    setProdutos((prevProdutos) => {
      return prevProdutos.filter((p) => p.id !== produto.id)
    });
    setVisibleDelete(prevState => !prevState);
  }

  return (
    <div>
      <Layout />
      <div className="container">
        { !visibleDelete && !visibleEdit && !visibleDetails && !visibleCreate &&(
        <>
            <Header 
              toggleVisibilityCreate={toggleVisibilityCreate}
              textTitle='Lista de Produtos'
              textBtn='Criar novo Produto'
            />
            <TableList 
              labels={labels} 
              produtos={produtos}
              toggleVisibilityEdit={toggleVisibilityEdit}
              toggleVisibilityDelete={toggleVisibilityDelete}
              toggleVisibilityDetails={toggleVisibilityDetails}
            />
          </>
        )}

        {/* enviar "páginas" corretas para cada botão e a informação se devem estar visiveis ou não */}
        {visibleEdit && <EditarProduto 
          produto={editableProduct} 
          handleEditarProduto={handleEditarProduto}
          toggleVisibilityEdit={toggleVisibilityEdit}
          setVisibleEdit={setVisibleEdit}/>}
        {visibleDelete && <ApagarProduto 
          produto={editableProduct}
          labels={labels}
          handleApagarProduto={handleApagarProduto}
          toggleVisibilityDelete={toggleVisibilityDelete}/>}
        {visibleDetails && <DetalhesProduto 
          produto={editableProduct}
          labels={labels}
          toggleVisibilityDetails={toggleVisibilityDetails}/>}
        {visibleCreate && <CriarProduto 
          labels={labels}
          handleCriarProduto={handleCriarProduto}
          toggleVisibilityCreate={toggleVisibilityCreate}/>}
      </div>
    </div>
  );
}

export default Produtos;
