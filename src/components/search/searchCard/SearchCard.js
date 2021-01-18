import React from 'react'
import PropTypes from 'prop-types'

import {
  DivideBox, ResultStyle, Image, Content, TitleBook, TagBook, Tag, ConP, Line,
} from '../style'

const SearchCard = (props) => {
  const {
    title, creator, coverageTemporal, tag, image,
  } = props

  return (
    <ResultStyle>
      <DivideBox>
        <Image src={`data:image/jpeg;base64,${image}`} />
        <Content>
          <TitleBook>
            {title}
            {' '}
          </TitleBook>
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
                { value}
              </Tag>

            ))}
          </TagBook>
        </Content>
      </DivideBox>
    </ResultStyle>
  )
}

SearchCard.defaultProps = {
  title: 'default',
  creator: 'default',
  coverageTemporal: 'default',
  tag: [],

}

SearchCard.propTypes = {
  title: PropTypes.string,
  creator: PropTypes.string,
  coverageTemporal: PropTypes.string,
  tag: PropTypes.arrayOf(PropTypes.string),
}

export default SearchCard
