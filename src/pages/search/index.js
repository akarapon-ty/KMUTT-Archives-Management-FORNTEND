import React, { useEffect, useState } from 'react'

import { SearchResult } from '../../components/search'

export const Search = () => {
  const [infor, setInfo] = useState([])
  const SearchTest = () => infor.map((index, value) => <SearchResult key={value.create} create={value.create} name={value.name} tag={value.tag} />)

  useEffect(() => {
    setInfo([{
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
    }])

    console.log(infor)
  }, [SearchTest])

  return (
    <div>
      <p>testt</p>
      {SearchTest}
    </div>
  )
}

export default { }
