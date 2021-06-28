import styled, { css } from 'styled-components'


const StyledButton = styled.button`
display: block;
width: 100px;
margin-left: auto;
margin-right: auto;
margin-bottom: 5px;
padding: 10px 20px;
text-transform: uppercase;
&:hover{
    opacity: 0.7
};

${props => props.first && css`
background-color: ${props => props.theme.color.first.middle};
`}

${props => props.second && css`
background-color: ${props => props.theme.color.second.middle};
`}

`

const Button = (props) => {
    return (
        <StyledButton{ ...props }/>
    )
}

export default Button