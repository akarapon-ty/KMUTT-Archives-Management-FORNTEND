import React, { useEffect, useState } from 'react'

import { SearchResult, SearchFormat } from '../../components/search'
import DefaultLayoutStyle from '../../components/util/LayoutStyle'

export const Search = () => {
  const [infor, setInfo] = useState([])

  useEffect(() => {
    const qResult = [{
      create: 'testd',
      name: 'ty',
      tag: [122, 123, 111],
    }, {
      create: 'test2',
      name: 'ty2',
      tag: [122, 123, 111],
    }, {
      create: 'test33',
      name: 'ty3',
      tag: [122, 123, 111],
    }]
    setInfo([...qResult])

    window.console.log(infor)
  }, [])

  useEffect(() => {
    window.console.log(infor)
  }, [infor])

  return (
    <DefaultLayoutStyle>
      <SearchFormat searchFill="KMUTT" searchTotal={infor.length} />
      {infor.map((value) => <SearchResult key={value.create} create={value.create} name={value.name} tag={value.tag} />)}
    </DefaultLayoutStyle>
  )
}

export default { }
