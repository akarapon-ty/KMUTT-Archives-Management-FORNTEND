import React from 'react'

import DefaultLayoutStyle from '../../components/util/LayoutStyle'
import { HeadHomepage } from './style'
import { SearchFormat } from '../../components/search'

const Homepage = () => (
  <>
    <DefaultLayoutStyle activate>
      <HeadHomepage>KMUTT ARCHIVES MANAGEMENT</HeadHomepage>
      <SearchFormat active />
    </DefaultLayoutStyle>
  </>
)

export default Homepage
