import React from 'react';
import styled from 'styled-components'

const InputStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
`


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

    // state = {
    //     minValue: "",
    //     maxValue: "",
    //     product: ""
    // }

    onChangeInputMinValue = (event) => {
        this.setState({ minValue: event.target.value});
        console.log(this.props.minValue)
    };


    onChangeInputMaxValue = (event) => {
        this.setState({ maxValue: event.target.value});
    };

    onChangeInputProduct = (event) => {
        this.setState({ product: event.target.value});
    };


    render() {
        
        return (
            <InputStyle>
                <h3>Filtros:</h3>
                
                <label>Valor Mínimo:</label>
                <input value={this.props.minValue} onChange={this.onChangeInputMinValue}/>
                
                <label>Valor Máximo:</label>
                <input value={this.props.MaxValue} onChange={this.onChangeInputMaxValue}/>

                <label>Buscar Produto</label>
                <input value={this.props.searchProduct} onChange={this.onChangeInputProduct}/>
            </InputStyle>
        )
    }
}

export default Filter