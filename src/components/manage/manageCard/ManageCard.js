import React from 'react'
import PropTypes from 'prop-types'

import {
  DivideBox, ResultStyle, Image, Content, TitleBook, TagBook, Tag, ConP, Line, DeleteButton, ManageButton,
} from '../style'

const ManageCard = (props) => {
  const {
    title, creator, coverageTemporal, tag,
  } = props

  return (
    <ResultStyle>
      <DivideBox>
        <Image />
        <Content>
          <DeleteButton type="button">Delete</DeleteButton>
          <TitleBook>
            {title}
            {' '}
          </TitleBook>
          <Line />
          <ManageButton type="button">Edit</ManageButton>
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

ManageCard.defaultProps = {
  title: 'default',
  creator: 'default',
  coverageTemporal: 'default',
  tag: [],

}

ManageCard.propTypes = {
  title: PropTypes.string,
  creator: PropTypes.string,
  coverageTemporal: PropTypes.string,
  tag: PropTypes.arrayOf(PropTypes.string),
}

export default ManageCard
