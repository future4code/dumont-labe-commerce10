import React from 'react';
import styled from 'styled-components'

const InputStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
`
const FilterStyle = styled.label`
    margin-top: 10px;
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
                
                <FilterStyle>Valor Mínimo:</FilterStyle>
                <input value={this.props.minValue} onChange={this.props.changeMinValue}/>
                
                <FilterStyle>Valor Máximo:</FilterStyle>
                <input value={this.props.maxValue} onChange={this.props.changeMaxValue}/>

                <FilterStyle>Buscar Produto</FilterStyle>
                <input value={this.props.product} onChange={this.props.changeProduct}/>
            </InputStyle>
        )
    }
}

export default Filter