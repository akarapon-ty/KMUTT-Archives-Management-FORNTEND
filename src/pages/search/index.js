import React, { useEffect } from 'react'

import { SearchResult } from '../../components/search'

export const Search = () => {
  let infor = []
  useEffect(() => {
    infor = [{
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
    console.log(infor)
  }, [])

  const searchRes = infor.map((value) => <SearchResult create={value.create} name={value.name} tag={value.tag}/>)

  return (
    <div>
      <p>testt</p>
      {searchRes}
    </div>
  )
}

export default { }
