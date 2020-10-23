import React from 'react';
import styled from 'styled-components'
import add from '../imgs/add-iconsvg.svg'
import remove from '../imgs/remove-icon.svg'


const ButtonAddAndRemove = styled.button`
    background: none;
    border: none;
`

const CartListItemsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

class Cart extends React.Component {
    render (){

        const cartList = this.props.cartList.map((trip) => {
            return (
              <CartListItemsContainer>
                <p>{trip.onCart} x {trip.name}</p>
                <div>
                <ButtonAddAndRemove onClick={() => this.props.onRemoveCartButton(trip)}><img src={remove} /></ButtonAddAndRemove>
                <ButtonAddAndRemove onClick={() => this.props.onClickCartButton(trip)}><img src={add} /></ButtonAddAndRemove>
                </div>
              </CartListItemsContainer>
            )
        })

        return(
            <div>
                <h2>Carrinho:</h2>
                {cartList}
                <h3>Total</h3>
            </div>
        )
    }
    
}

export default Cart