import React, { useEffect } from 'react'

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

  const temp = infor.map((value) => <TempImp create={value.create} />)

  return (
    <div>
      <p>testt</p>
      {temp}
    </div>
  )
}

export default { }
