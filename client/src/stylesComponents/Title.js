import styled, { css } from 'styled-components'

const StyledTitle = styled.h2`

padding: 10px 20px;
margin-bottom: 10px;
margin-top: 10px;

${props => props.first && css`
background-color: ${props => props.theme.color.first.dark};
color: ${props => props.theme.color.second.light};

`}

${props => props.second && css`
background-color: ${props => props.theme.color.second.dark};
color: ${props => props.theme.color.first.light};

`}

`

const Title = (props) => {
    return (
        <StyledTitle{ ...props }/>
    )
}

export default Title