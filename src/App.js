import React from 'react';
import logo from './logo.svg';
import Produtos from './components/Products';
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
import Logo from './imgs/logo.png'
import Cart from './components/Cart';
import Filter from './components/Filter';

const Images = styled.img`
  width: 400px;
  height: 400px;
`

const Title = styled.img`
  width: 80px;
  height: 80px;
`

const TitleContainer = styled.div`
  background-color: #F27405;
  display: flex;
  align-items: center;
  font-size: 30px;
  position: sticky;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  margin-left: 10px;
  margin-right: 30px;
`

const SelectStyle = styled.select`
  height: 20px;
`

const PageContainer = styled.div`
  display: flex;
`

const TripsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: #F2A950;
  padding: 10px;
  margin: 5px;
`

const ButtonStyle = styled.button`
  width: 350px;
  height: 50px;
  margin: 20px auto;
  background-color: #F27405;
  border: 0;
  color: white;  
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
	    value: 56000000,
      imageUrl: marte,
      onCart: 0
    },
    {
      id: 2,
	    name: "Lua",
	    value: 10000000,
      imageUrl: lua,
      onCart: 0
    },
    {
      id: 3,
	    name: "Jupiter",
	    value: 78000000,
      imageUrl: Jupiter,
      onCart: 0
    },
    {
      id: 4,
	    name: "Netuno",
	    value: 180000000,
      imageUrl: Netuno,
      onCart: 0
    },
    {
      id: 5,
	    name: "Plutão",
	    value: 220000000,
      imageUrl: Plutao,
      onCart: 0
    },
    {
      id: 6,
	    name: "Venus",
	    value: 67000000,
      imageUrl: Venus,
      onCart: 0
    },
    {
      id: 7,
	    name: "Kepler 186f",
	    value: 1000000000,
      imageUrl: Kepler,
      onCart: 0
    },
    {
      id: 8,
	    name: "Viagem em torno do sol",
	    value: 200000000,
      imageUrl: Sol,
      onCart: 0
    },
  ],
  cartList: [],
  filter: [
    {
      minValue: "",
        maxValue: "",
        product: ""
    }
  ]
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
    
    const newCartList = newProductsList.filter((trip) => {
      if (trip.onCart !== 0){
        return true
      } else {
        return false
      }

    })
    console.log(newCartList)
    this.setState({cartList: newCartList})
  }


  render (){
    console.log(this.state)
    const productsList = this.state.trips.map((trip) => {
      
      return (
        <div>
          <ProductsContainer>
            <Images src = {trip.imageUrl}  /> 
            <p>{trip.name}</p>
            <p>R$ {trip.value}</p>
            <ButtonStyle onClick={() => this.onClickCartButton(trip)}>Adicionar ao Carrinho</ButtonStyle>
          </ProductsContainer>
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
        <TitleContainer>
          <Title src = {Logo} />
          <p> LabEcommerce</p>
        </TitleContainer>
        <Header>
          <p>Quantidade de Viagens: {this.state.trips.length}</p>
          <SelectStyle>
            <option value ="crescente">Preço: Crescente</option>
            <option value ="decrescente">Preço: Decrescente</option>
          </SelectStyle>
        </Header>

        <PageContainer>

        <Filter 
          minValue = {this.state.filter.minValue}
          maxValue = {this.state.filter.maxValue}
          product = {this.state.filter.product}
        />
        
        <TripsContainer>
          {productsList}
        </TripsContainer>
        
        </PageContainer>

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
