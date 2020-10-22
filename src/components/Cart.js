import React from 'react';

class Cart extends React.Component {


    render (){
        return(
            <div>
                <p>{this.props.onCart} X {this.props.name}</p>
            </div>
        )
    }
}

export default Cart