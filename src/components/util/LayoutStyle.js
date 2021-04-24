import React from 'react'
import styled from 'styled-components'
import bgShort from '../../assets/BG/shortBg.png'
import bgTall from '../../assets/BG/TrueBG.png'

const LayoutGridStyle = styled.div`
    font-family: 'Kanit', sans-serif;
    font-weight:400;
    display:grid;
    min-width:900px;
    ${(props) => (props.wide ? 'grid-template-columns: auto minmax(900px,80%) auto; width:inherit;' : 'grid-template-columns: auto 900px auto;')}

`
const GridContentStyle = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
`

export const BgTall = styled.img`
  top:-10px;
  left:0px;
  min-width:920px;
  width: 100%;
  position: absolute;
  z-index:-1;
  height:100%;
  float:right;
  overflow-y:auto;
`

export const BgShort = styled.img`
  top: 0px;
  left: 0px;
  width: 100%;
  height: 250px;
  position: absolute;
  min-width: 920px;
  z-index: -1;
  overflow-y: auto;
  
`

const DefaultLayoutStyle = ({ wide, children, activate }) => {
  const bg = activate ? <BgTall src={bgTall} /> : <BgShort src={bgShort} />
  return (
    <LayoutGridStyle wide={wide}>
      {bg}
      <GridContentStyle>
        {children}
      </GridContentStyle>
    </LayoutGridStyle>
  )
}

export default DefaultLayoutStyle
