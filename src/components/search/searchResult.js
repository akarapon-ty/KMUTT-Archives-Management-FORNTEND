import React from 'react'
import PropTypes from 'prop-types'

import {
  DivideBox, ResultStyle, Image, Content, TitleBook, TagBook, Tag, ConP, Line,
} from './style'

export const SearchResult = (props) => {
  const {
    title, creator, coverageTemporal, tag,
  } = props

  return (
    <ResultStyle>
      <DivideBox>
        <Image />

        <Content>
          <TitleBook>{title}</TitleBook>
          <Line />
          <ConP>
            Creator :
            {' '}
            {creator}
          </ConP>
          <ConP>
            Coverage temporal :
            {' '}
            {coverageTemporal}
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
  title: 'title default',
  creator: 'creator default',
  coverageTemporal: 'coverageTemporal default',
  tag: [],

}

SearchResult.propTypes = {
  title: PropTypes.string,
  creator: PropTypes.string,
  coverageTemporal: PropTypes.number,
  tag: PropTypes.arrayOf(PropTypes.string),

}
