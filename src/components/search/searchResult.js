import React from 'react'
import PropTypes from 'prop-types'

import {
  DivideBox, ResultStyle, Image, Content, TitleBook, TagBook, Tag, ConP, Line, DeleteButton, ManageButton,
} from './style'

export const SearchResult = (props) => {
  const {
    title, creator, coverageTemporal, tag, manage,
  } = props

  return (
    <ResultStyle>
      <DivideBox>
        <Image />

        <Content>
          {manage ? <DeleteButton type="button">Delete</DeleteButton> : null}
          <TitleBook>
            {title}
            {' '}
          </TitleBook>
          <Line />
          {manage ? <ManageButton type="button">Edit</ManageButton> : null}
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
  coverageTemporal: '0',
  tag: [],

}

SearchResult.propTypes = {
  title: PropTypes.string,
  creator: PropTypes.string,
  coverageTemporal: PropTypes.string,
  tag: PropTypes.arrayOf(PropTypes.string),

}
