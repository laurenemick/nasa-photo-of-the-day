import styled from 'styled-components'

export default styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;

    color: ${props => props.textColorBlue ? 'blue' : 'black'};
    font-size: ${props => props.subTextSize ? '1.5rem' : '2rem'};
`
