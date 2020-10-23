import React from 'react';
import styled from 'styled-components'
import add from '../imgs/add-iconsvg.svg'
import remove from '../imgs/remove-icon.svg'


const ButtonAddAndRemove = styled.button`
    background: none;
    border: none;
    margin: 0;
`

const CartListItemsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const CartItens = styled.p`
    margin: 5px;
`
const CartContainer = styled.div`
    margin-left: 5px;
`


class Cart extends React.Component {

    getTotalValue = () => {
        let totalValue = 0

        for(let trip of this.props.cartList){
            totalValue += trip.value * trip.onCart
        }
        return totalValue
    }


    render (){

        const cartList = this.props.cartList.map((trip) => {
            return (
              <CartListItemsContainer>
                <CartItens>{trip.onCart} x {trip.name} - R${trip.value},00</CartItens>
                <div>
                <ButtonAddAndRemove onClick={() => this.props.onRemoveCartButton(trip)}><img src={remove} /></ButtonAddAndRemove>
                <ButtonAddAndRemove onClick={() => this.props.onClickCartButton(trip)}><img src={add} /></ButtonAddAndRemove>
                </div>
              </CartListItemsContainer>
            )
        })

        return(
            <CartContainer>
                <h2>Carrinho:</h2>
                {cartList}
                <h3>Total: R${this.getTotalValue()},00</h3>
            </CartContainer>
        )
    }
    
}

export default Cart