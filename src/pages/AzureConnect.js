// get the data for the Produtos
const getProdutosFromAzure = async () => {
    try {
      const response = await fetch("https://easymoto.azurewebservices.net/api/ProdutosAPI")
      const data = await response.json()
      return data;
    } catch (error) {
      console.log('error: ', error)
      return []
    }
  }

// the data for the Fotografias
const getFotografiasfromAzure = async () => {
    try {
        const response = await fetch("https://easymoto.azurewebservices.net/api/FotografiasAPI")
        const data = await response.json();
        return data
    } catch (error) {
        console.log('error: ', error)
        return []
    }
}

//add the corresponding fotos to the products
const updateProdutoListWithFotografias = (produtosList, fotografiasList) => {
  const updatedListaProduto = produtosList.map((produto) => {
    const matchingFotografias = fotografiasList.filter((fotografia) => fotografia.produtoFK === produto.id);
    const listaFotografias = matchingFotografias.map((fotografia) => fotografia.ficheiro);
    return { ...produto, listaFotografias };
  });

  console.log(updatedListaProduto);
    
}
  
export const produtosList = getProdutosFromAzure()
export const fotografiasList = getFotografiasfromAzure()
// export const produtosListFoto = updateProdutoListWithFotografias(Object.values(produtosList), Object.values(fotografiasList))



export default produtosList
  




