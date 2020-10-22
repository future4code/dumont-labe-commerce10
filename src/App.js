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
import Cart from './components/carrinho';

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
      onCart: 0
    },
    {
      id: 2,
	    name: "Lua",
	    value: "R$10.000.000,00",
      imageUrl: lua,
      onCart: 0
    },
    {
      id: 3,
	    name: "Jupiter",
	    value: "R$78.000.000,00",
      imageUrl: Jupiter,
      onCart: 0
    },
    {
      id: 4,
	    name: "Netuno",
	    value: "R$180.000.000,00",
      imageUrl: Netuno,
      onCart: 0
    },
    {
      id: 5,
	    name: "Plutão",
	    value: "R$220.000.000,00",
      imageUrl: Plutao,
      onCart: 0
    },
    {
      id: 6,
	    name: "Venus",
	    value: "R$67.000.000,00",
      imageUrl: Venus,
      onCart: 0
    },
    {
      id: 7,
	    name: "Kepler 186f",
	    value: "R$1.000.000.000,00",
      imageUrl: Kepler,
      onCart: 0
    },
    {
      id: 8,
	    name: "Viagem em torno do sol",
	    value: "R$2.000.000.000,00",
      imageUrl: Sol,
      onCart: 0
    },
  ],
  cartList: []
}

  

  onClickCartButton = (add) => {
    const newProductsList = this.state.trips.map((trip) => {
      if (trip.id === add.id) {
        const newOnCart = {
          ...trip,
          onCart: trip.onCart+1
        }
        return newOnCart 
      } else {
        return trip
      }
    })
    
    this.setState({trips: newProductsList})
    
    const newCartList = this.state.trips.filter((trip) => {
      if (trip.onCart !== 0){
        return true
      } else {
        return false
      }
    })
    console.log(newCartList)
    this.setState({cartList: newCartList})
  }

  // updateCartList = () => {
  //   const newCartList = this.state.trips.filter((trip) => {
  //     if (trip.onCart !== 0){
  //       return true
  //     } else {
  //       return false
  //     }
  //   })
  //   console.log(newCartList)
  //   this.setState({cartList: newCartList})
  // }

  render (){
    console.log(this.state)
    const productsList = this.state.trips.map((trip) => {
      
      return (
        <div>
          <Container>
            <Images src = {trip.imageUrl}  /> 
            <p>{trip.name}</p>
            <p>{trip.value}</p>
            <ButtonStyle onClick={() => this.onClickCartButton(trip)}>Adicionar ao Carrinho</ButtonStyle>
          </Container>
        </div>
      ) 
    })

    const cartList = this.state.cartList.map((trip) => {
      return (
        <div>
          <Cart onCart = {trip.onCart} name = {trip.name}/>
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
        <div>
          <h2>Carrinho:</h2>
          {cartList}
        </div>
      </div>
    );
  }
}

export default App;
