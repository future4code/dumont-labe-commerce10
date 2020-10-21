import React from 'react';
import logo from './logo.svg';
import Produtos from './components/produtos';
import styled from 'styled-components'
import marte from './imgs/marte.jpg';
import lua from './imgs/lua.jpg'
import Jupiter from './imgs/Jupiter-Nasa.png'
import Netuno from './imgs/netuno.jpg'
import Plutao from './imgs/plutao.jpg'
import Venus from './imgs/venus.png'
import Kepler from './imgs/kepler.jpg'
import Sol from './imgs/sol.jpeg'
import Buy from './imgs/carrinho.jpg'

const Images = styled.img`
  width: 400px;
  height: 400px;
`

const TripsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Container = styled.div`
  background-color: gray;
  padding: 10px;
  margin: 5px;
`

const ButtonStyle = styled.button`
  width: 400px;
  margin: 20px auto;
  background-color: black;
  color: white;  
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  `

const CartButton = styled.button`
  background-color: white;
  border-radius: 50%;
  width: 130px;
  height: 130px;
  position: sticky;
  bottom: 10px;
  left: 10px;
`
const CartImg = styled.img`
  width: 80px;
  height: 80px;
`

class App extends React.Component{
  state = {
  trips: [
    {
      id: 1,
	    name: "Marte",
	    value: "R$ 56.000.000,00",
      imageUrl: marte,
      onCart: false
    },
    {
      id: 2,
	    name: "Lua",
	    value: "R$10.000.000,00",
      imageUrl: lua,
      onCart: false
    },
    {
      id: 3,
	    name: "Jupiter",
	    value: "R$78.000.000,00",
      imageUrl: Jupiter,
      onCart: false
    },
    {
      id: 4,
	    name: "Netuno",
	    value: "R$180.000.000,00",
      imageUrl: Netuno,
      onCart: false
    },
    {
      id: 5,
	    name: "Plutão",
	    value: "R$220.000.000,00",
      imageUrl: Plutao,
      onCart: false
    },
    {
      id: 6,
	    name: "Venus",
	    value: "R$67.000.000,00",
      imageUrl: Venus,
      onCart: false
    },
    {
      id: 7,
	    name: "Kepler 186f",
	    value: "R$1.000.000.000,00",
      imageUrl: Kepler,
      onCart: false
    },
    {
      id: 8,
	    name: "Viagem em torno do sol",
	    value: "R$2.000.000.000,00",
      imageUrl: Sol,
      onCart: false
    },
  ]
}
  render (){
    const productsList = this.state.trips.map((trip) => {
      return (
        <div>
          <Container>
            <Images src = {trip.imageUrl}  /> 
            <p>{trip.name}</p>
            <p>{trip.value}</p>
            <ButtonStyle>Adicionar ao Carrinho</ButtonStyle>
          </Container>
        </div>
      ) 
    })
    return (
      <div>
        <Header>
          <p>Quantidade de Viagens: {this.state.trips.length}</p>
          <select>
            <option value ="crescente">Preço: Crescente</option>
            <option value ="decrescente">Preço: Decrescente</option>
          </select>
        </Header>
        <TripsContainer>
          {productsList}
        </TripsContainer>
        <CartButton><CartImg src = {Buy} /></CartButton>
      </div>
    );
  }
}

export default App;
