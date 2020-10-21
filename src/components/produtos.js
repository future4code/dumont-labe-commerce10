import React from 'react';

class Produtos extends React.Component {

    render (){
        return(
            <div>
                <img src = {this.props.imagem} />
                <p>{this.props.nome}</p>
                <p>{this.props.preco}</p>
                
            </div>
        )
    }
}

export default Produtos