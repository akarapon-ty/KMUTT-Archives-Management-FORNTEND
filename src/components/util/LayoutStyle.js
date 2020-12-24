import React from 'react'
import styled from 'styled-components'

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

export const Bg = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-image: url(${(props) => props.bg});
`

const DefaultLayoutStyle = ({ children }) => (
  <LayoutGridStyle>
    <GridContentStyle>
      {children}
    </GridContentStyle>
  </LayoutGridStyle>
)
export default DefaultLayoutStyle
