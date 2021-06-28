import styled, { css } from 'styled-components'


const StyledInput = styled.input`
display: block;
width: 50%;
margin-left: auto;
margin-right: auto;
margin-bottom: 5px;
padding:7px 10px;
border: none;
&:focus{
    background-color: ${props => props.theme.color.first.dark};
}

@media ${props =>props.theme.media.phone}{
    &:focus{
        background-color: ${props => props.theme.color.second.middle};   
    }
  };
  
  @media ${props =>props.theme.media.tablet}{
    &:focus{
        background-color: ${props => props.theme.color.first.middle};   
    }
  };
  
  @media ${props =>props.theme.media.computer}{
    &:focus{
        background-color: ${props => props.theme.color.second.middle};   
    }
  };

`

const Input = (props) => {
    return (
        <StyledInput{ ...props }/>
    )
}

export default Input