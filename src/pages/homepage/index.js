import React from 'react'

import DefaultLayoutStyle from '../../components/util/LayoutStyle'
import { HeadHomepage } from './style'
import InputSearchBar from '../../components/util/input/searchBar/InputSearchBar'

const Homepage = () => (
  <>
    <DefaultLayoutStyle activate>
      <HeadHomepage>KMUTT ARCHIVES MANAGEMENT</HeadHomepage>
      <InputSearchBar />
    </DefaultLayoutStyle>
  </>
)

export default Homepage
