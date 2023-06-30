export const icons = [
  {
  id: 1,
  src: require('./icon-boots.png')
}, 
{
  id: 2,
  src: require('./icon-gloves.png')
}, 
{
  id: 3,
  src: require('./icon-helmets.png')
}, 
{
  id: 4,
  src: require('./icon-jackets.png')
}, 
{
  id: 5,
  src: require('./icon-pants.png')
}, 
]
export const produtosList = [
  {
    id: 1,
    nome: 'CAPACETE NEXX SX100R ABISAL BLACK RED MATT',
    preco: '186,30 €',
    descricao: 'Capacete Nexx SX.100R Abisal Preto / Vermelho Mate. Capacete integral em material termoplástico muito leve. Destaca-se por oferecer um design aerodinâmico, moderno e esportivo ideal para o uso diário. Tem uma pala de sol integrada, um sistema de ventilação eficaz e um forro interior muito confortável. Destaca-se o spoiler traseiro projetado para oferecer excelente desempenho aerodinâmico.',
    tamanho: 'S',
    genero: 'Feminino',
    quantidade: 1,
    cor: 'Cizento',
    colecao: 'Anual',
    categoria: 'capacetes',
    marca: 'Nexx',
    utilizador: 'EasyMoto',
    images: require('./1-1.jpg')
  },
  {
    id: 2,
    nome: 'Luvas',
    preco: '19,99 €',
    descricao: 'Descrição 2',
    tamanho: 'L',
    genero: 'Masculino',
    quantidade:7,
    cor: 'Azul',
    colecao: 'Inverno',
    categoria: 'luvas',
    marca: 'Alpine Stars',
    utilizador: 'EasyMoto',
    images: require('./2-1.jpg')
  },
  {
    id: 3,
    nome: 'Botas',
    preco: '76,80 €',
    descricao: 'Descrição 3',
    tamanho: 'M',
    genero: 'Masculino',
    quantidade: 5,
    cor: 'Preto',
    colecao: 'Anual',
    categoria: 'botas',
    marca: 'Dainese',
    utilizador: 'Utilizador 3',
    images: require('./3-1.jpg')
  },
  
  {
    id: 4,
    nome: 'Botas 2',
    preco: '89,80 €',
    descricao: 'Descrição 3',
    tamanho: 'M',
    genero: 'Masculino',
    quantidade: 3,
    cor: 'Preto',
    colecao: 'Anual',
    categoria: 'botas',
    marca: 'Fox',
    utilizador: 'Utilizador 3',
    images: require('./3-1.jpg')
  },
  {
    id: 5,
    nome: 'Luvas 2',
    preco: '29,99 €',
    descricao: 'Descrição 2',
    tamanho: 'S',
    genero: 'Masculino',
    quantidade: 3,
    cor: 'Azul',
    colecao: 'Inverno',
    categoria: 'luvas',
    marca: 'Dainese',
    utilizador: 'EasyMoto',
    images: require('./2-1.jpg')
  },
]

export const labels = Object.keys(produtosList[0]).slice(1)