import React, { useEffect } from 'react'

const Search = () => {
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

  return (
    <div>
      <p>testt</p>
    </div>
  )
}

export default Search
