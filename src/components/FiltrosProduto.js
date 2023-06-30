import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

const FiltrosProduto = ({categoria, labels, marcas, colecoes, cores, generos, tamanhos, handleFiltros}) => {
  const [selectedMarcas, setSelectedMarcas] = useState([])
  const [selectedColecao, setSelectedColecao] = useState([])
  const [selectedCor, setSelectedCor] = useState([])
  const [selectedGenero, setSelectedGenero] = useState([])
  const [selectedTamanho, setSelectedTamanho] = useState([])
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => {
    setShow(true)
    // console.log(tamanhos)
    }

  const handleMarcaChange = (event) => {
    const { value, checked } = event.target
    if (checked) {
      setSelectedMarcas((prevSelectedMarcas) => [...prevSelectedMarcas, value])
    } else {
      setSelectedMarcas((prevSelectedMarcas) =>
        prevSelectedMarcas.filter((marca) => marca !== value)
      )
    }
  }

  const handleColecaoChange = (event) => {
    const {value, checked} = event.target
    if (checked) {
        setSelectedColecao((prevSelectedColecao) => [...prevSelectedColecao, value])
    } else {
        setSelectedColecao((prevSelectedColecao) =>
        prevSelectedColecao.filter((colecao) => colecao !== value)
      )
    }
  }

  const handleCorChange = (event) => {
    const {value, checked} = event.target
    if (checked) {
        setSelectedCor((prevSelectedCor) => [...prevSelectedCor, value])
    } else {
        setSelectedCor((prevSelectedCor) =>
        prevSelectedCor.filter((cor) => cor !== value)
      )
    }
  }

  const handleGeneroChange = (event) => {
    const {value, checked} = event.target
    if (checked) {
        setSelectedGenero((prevSelectedGenero) => [...prevSelectedGenero, value])
    } else {
        setSelectedGenero((prevSelectedGenero) =>
        prevSelectedGenero.filter((genero) => genero !== value)
      )
    }
  }

  const handleTamanhoChange = (event) => {
    const {value, checked} = event.target
    if (checked) {
        setSelectedTamanho((prevSelectedTamanho) => [...prevSelectedTamanho, value])
    } else {
        setSelectedTamanho((prevSelectedTamanho) =>
        prevSelectedTamanho.filter((tamanho) => tamanho !== value)
      )
    }
  }

  const applyFilter = () => {
    handleFiltros(selectedMarcas, selectedColecao, selectedCor, selectedGenero, selectedTamanho, categoria)
  }

  return (
    <div>
        {categoria !== 'Top' && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h1>{categoria}</h1>
            <Button style={{ marginLeft: '30px' }} variant="primary" onClick={handleShow} className="me-2">
            Filtrar
            </Button>
        </div>
        )}
        <Offcanvas placement='end' name='end' show={show} onHide={handleClose} >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Filtrar {categoria}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='off-canvas'>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>{labels[9]}</Accordion.Header>
                        <Accordion.Body>
                        {marcas
                            .filter((marca, index, arr) => arr.indexOf(marca) === index)
                            .map((marca, index) => (
                            <div className="form-check" key={marca + index}>
                                <input className="form-check-input" type="checkbox" value={marca} id={`flexCheckDefault-${index}`} onChange={handleMarcaChange}/>
                                <label className="form-check-label" htmlFor={`flexCheckDefault-${index}`}>
                                {marca}
                                </label>
                            </div>
                            ))}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>{labels[7]}</Accordion.Header>
                        <Accordion.Body>
                        {colecoes
                            .filter((colecao, index, arr) => arr.indexOf(colecao) === index)
                            .map((colecao, index) => (
                            <div className="form-check" key={colecao + index}>
                            <input className="form-check-input" type="checkbox" value={colecao} id={`flexCheckDefault-${index}`} onChange={handleColecaoChange}/>
                            <label className="form-check-label" htmlFor={`flexCheckDefault-${index}`}>
                            {colecao}
                            </label>
                        </div>
                        ))}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>{labels[6]}</Accordion.Header>
                        <Accordion.Body>
                        {cores
                            .filter((cor, index, arr) => arr.indexOf(cor) === index)
                            .map((cor, index) => (
                            <div className="form-check" key={cor + index}>
                            <input className="form-check-input" type="checkbox" value={cor} id={`flexCheckDefault-${index}`} onChange={handleCorChange}/>
                            <label className="form-check-label" htmlFor={`flexCheckDefault-${index}`}>
                            {cor}
                            </label>
                        </div>
                        ))}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>{labels[4]}</Accordion.Header>
                        <Accordion.Body>
                        {generos
                            .filter((genero, index, arr) => arr.indexOf(genero) === index)
                            .map((genero, index) => (
                            <div className="form-check" key={genero + index}>
                            <input className="form-check-input" type="checkbox" value={genero} id={`flexCheckDefault-${index}`} onChange={handleGeneroChange}/>
                            <label className="form-check-label" htmlFor={`flexCheckDefault-${index}`}>
                            {genero}
                            </label>
                        </div>
                        ))}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>{labels[3]}</Accordion.Header>
                        <Accordion.Body>
                        {tamanhos
                            .filter((tamanho, index, arr) => arr.indexOf(tamanho) === index)
                            .map((tamanho, index) => (
                            <div className="form-check" key={tamanho + index}>
                            <input className="form-check-input" type="checkbox" value={tamanho} id={`flexCheckDefault-${index}`} onChange={handleTamanhoChange}/>
                            <label className="form-check-label" htmlFor={`flexCheckDefault-${index}`}>
                            {tamanho}
                            </label>
                        </div>
                        ))}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant='secondary' onClick={handleClose} >Cancelar</Button>
                    <Button onClick={applyFilter} >Aplicar filtro</Button>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    </div>
  )
}

export default FiltrosProduto
