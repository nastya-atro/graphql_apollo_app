import styled, { css } from 'styled-components'


const StyledMainText = styled.div`
padding: 20px;
margin-bottom: 5px;
font-weight:bold;
${props => props.first && css`
border: 1px solid ${props => props.theme.color.first.dark};
`}

${props => props.second && css`
border: 1px solid ${props => props.theme.color.second.dark};
`}
`

const MainText = (props) => {
    return (
        <StyledMainText{ ...props }/>
    )
}

export default MainText