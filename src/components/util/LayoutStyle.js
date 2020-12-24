import React from 'react'
import styled from 'styled-components'
import bgShort from '../../assets/BG/shortBg.png'
import bgTall from '../../assets/BG/TrueBG.png'

const LayoutGridStyle = styled.div`
    font-family: 'Kanit', sans-serif;
    font-weight:200;
    display:grid;
    grid-template-columns: auto 900px auto;
    
`
const GridContentStyle = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
`

export const BgTall = styled.img`
  top:-10px;
  right:0px;
  width: 100%;
  position: fixed;
  height:100%;
  z-index:-1;
  overflow-y:auto;
`

export const BgShort = styled.img`
  top:-20px;
  right:0px;
  width: 100%;
  position: fixed;
  z-index:-1;
  overflow-y:auto;
`

const DefaultLayoutStyle = ({ children, activate }) => {
  const bg = activate ? <BgTall src={bgTall} /> : <BgShort src={bgShort} />
  return (
    <LayoutGridStyle>
      {bg}
      <GridContentStyle>
        {children}
      </GridContentStyle>
    </LayoutGridStyle>
  )
}

export default DefaultLayoutStyle
