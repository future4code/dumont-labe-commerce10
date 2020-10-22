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



    render() {
        
        return (
            <InputStyle>
                <h3>Filtros:</h3>
                
                <label>Valor Mínimo:</label>
                <input value={this.props.minValue} onChange={this.props.changeMinValue}/>
                
                <label>Valor Máximo:</label>
                <input value={this.props.maxValue} onChange={this.props.changeMaxValue}/>

                <label>Buscar Produto</label>
                <input value={this.props.product} onChange={this.props.changeProduct}/>
            </InputStyle>
        )
    }
}

export default Filter