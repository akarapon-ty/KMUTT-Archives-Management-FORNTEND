import React from 'react'
import PropTypes from 'prop-types'

import {
  DivideBox, ResultStyle, Image, Content, TitleBook, TagBook, Tag, ConP, Line,
} from './style'

export const SearchResult = (props) => {
  const {
    create, name, tag,
  } = props

  return (
    <ResultStyle>
      <DivideBox>
        <Image />

        <Content>
          <TitleBook>ชื่อหนังสือตัวใหญ่มาก</TitleBook>
          <Line />
          <ConP>
            Creator :
            {' '}
            {create}
          </ConP>
          <ConP>
            Coverage temporal :
            {' '}
            {name}
          </ConP>
          <TagBook>
            <div>Tag : </div>
            {tag.map((value) => (

              <Tag key={value}>
                { value }
              </Tag>

            ))}
          </TagBook>
        </Content>
      </DivideBox>

    </ResultStyle>

  )
}

export default { }

SearchResult.defaultProps = {
  create: 'ceate default',
  name: 'name default',
  tag: [],

}

SearchResult.propTypes = {
  create: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.arrayOf(PropTypes.number),
}
