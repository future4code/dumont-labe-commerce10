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

const CartContainer = styled.div`
  background-color: #F2A950;
  height: 400px;
  margin-right: 20px;
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
const initialTrips = [
  {
    id: 1,
    name: "Marte",
    value: 560,
    imageUrl: marte,
    onCart: 0
  },
  {
    id: 2,
    name: "Lua",
    value: 100,
    imageUrl: lua,
    onCart: 0
  },
  {
    id: 3,
    name: "Jupiter",
    value: 780,
    imageUrl: Jupiter,
    onCart: 0
  },
  {
    id: 4,
    name: "Netuno",
    value: 180,
    imageUrl: Netuno,
    onCart: 0
  },
  {
    id: 5,
    name: "Plutão",
    value: 220,
    imageUrl: Plutao,
    onCart: 0
  },
  {
    id: 6,
    name: "Venus",
    value: 670,
    imageUrl: Venus,
    onCart: 0
  },
  {
    id: 7,
    name: "Kepler 186f",
    value: 1000,
    imageUrl: Kepler,
    onCart: 0
  },
  {
    id: 8,
    name: "Viagem em torno do sol",
    value: 2000,
    imageUrl: Sol,
    onCart: 0
  },
]

class App extends React.Component{
  state = {
  trips: initialTrips,
  cartList: [],
  
  minValue: "",
  maxValue: "",
  product: "",
  
  sort: "",
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

    this.setState({cartList: newCartList})
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if(prevState.sort !== this.state.sort || prevState.product !== this.state.product || prevState.minValue !== this.state.minValue || prevState.maxValue !== this.state.maxValue ){
      this.filteredList()
    }
    
  }

  filteredList = () =>{
    console.log(this.state.trips)
    const ListaFiltrada = initialTrips
    .filter((trip) => {return(trip.value <= this.state.maxValue)})
    .filter((trip) => {return (trip.value >= this.state.minValue)})
    .filter((trip) => {return (trip.name.includes(this.state.product))})
    .sort((a , b) => {return(this.state.sort === 'CRESCENTE' ? a.value - b.value : b.value - a.value)})
    
    this.setState({trips : ListaFiltrada})
  }

  onChangeSort = (event) => {
    this.setState({sort: event.target.value})
  }

  onChangeInputMinValue = (event) => {
    this.setState({ minValue: event.target.value});
};

onChangeInputMaxValue = (event) => {
    this.setState({ maxValue: event.target.value});
};

onChangeInputProduct = (event) => {
    this.setState({ product: event.target.value});
};



  render (){
  
    const productsList = this.state.trips.map((trip) => {
      
      return (
        <div>
          <ProductsContainer>
            <Images src = {trip.imageUrl}  /> 
            <p>{trip.name}</p>
            <p>R$ {trip.value},00</p>
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
          <SelectStyle value = {this.state.sort} onChange = {this.onChangeSort}>
            <option value ={'CRESCENTE'} onChange = {this.onChangeSort}>Preço: Crescente</option>
            <option value ={'DECRESCENTE'} onChange = {this.onChangeSort}>Preço: Decrescente</option>
          </SelectStyle>
        </Header>

        <PageContainer>

          <Filter 
            minValue = {this.state.minValue}
              changeMinValue = {this.onChangeInputMinValue}
            maxValue = {this.state.maxValue}
              changeMaxValue = {this.onChangeInputMaxValue}
            product = {this.state.product}
              changeProduct = {this.onChangeInputProduct}
          />
        
          <TripsContainer>
            {productsList}
          </TripsContainer>

          <CartContainer>
            <h2>Carrinho:</h2>
            {cartList}
          </CartContainer>

        </PageContainer>

        <CartButton><CartImg src = {Buy} /></CartButton>
        
      </div>
    );
  }
}

export default App;
