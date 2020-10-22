import React from 'react';

    // TODO
    // Função para limpar os filtros
    // cleanFilters = () => {
    //     this.setState = ({
    //         minValue: "",
    //         maxValue: "",
    //         product: ""
    //     });
    // };
    
class Filter extends React.Component {

    state = {
        minValue: "",
        maxValue: "",
        product: ""
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

    render() {
        
        return (
            <div>
                <h1>Filtros:</h1>
                
                <label>Valor Mínimo:</label>
                <input value={this.state.minValue} onChange={this.onChangeInputMinValue}/>

                <label>Valor Máximo:</label>
                <input value={this.state.MaxValue} onChange={this.onChangeInputMaxValue}/>

                <label>Buscar Produto</label>
                <input value={this.state.searchProduct} onChange={this.onChangeInputProduct}/>
            </div>
        )
    }
}

export default Filter