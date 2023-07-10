import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const Produtocard = ({produto}) => {
  return (
    <div>
      <Card className="home-product-card">
            <div className="image-card">
              <Card.Img variant="top" src={produto.images}/>
            </div>
            <Card.Body>
              <Card.Title>{produto.preco}</Card.Title>
              <Card.Text className="truncate">
                {produto.nome}
              </Card.Text>
              <Button variant="primary">Ver Detalhes</Button>
            </Card.Body>
          </Card>
    </div>
  )
}

export default Produtocard
