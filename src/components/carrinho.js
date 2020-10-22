import React from 'react';

class Cart extends React.Component {

    // onChangeCartButton = (add) => {
    //     const newOnCartProductsList = this.state.trips.filter((trip) => {
    //       if (trip.id === add) {
    //         return true
    //       } else {
    //         return false
    //       }
    //     })
        
    //     this.setState({cartList: newOnCartProductsList})
    //   }

    render (){
        return(
            <div>
                <p>{this.props.onCart} X {this.props.name}</p>
            </div>
        )
    }
}

export default Cart