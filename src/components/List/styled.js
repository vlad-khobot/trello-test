import styled from 'styled-components'
import ExitSvg from '../../assets/cancel-button.svg'
export const Title = styled.div`
  font-size: 150% !important;
  font-weight: bold;
  text-align: center;
  background: transparent !important;
  border-bottom: none;
`
export const StyledButton = styled.button`
  position:absolute;
  width:35px;
  height:35px;
  top:20px;
  right:20px;
  border-radius:50%;
  background-image: url(${ExitSvg});

`
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`
export const ListContainer = styled.div`
  min-width: 426px;
`