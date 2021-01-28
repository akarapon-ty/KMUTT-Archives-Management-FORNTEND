import React from 'react'
import PropTypes from 'prop-types'

import {
  DivideBox, ResultStyle, Image, Content, TitleBook, TagBook, Tag, ConP, Line, ManageButton,
} from '../style'

import Popups from '../../util/popups/Popups'

const ManageCard = (props) => {
  const {
    title, creator, coverageTemporal, tag, image, onClick,
  } = props

  return (
    <ResultStyle>
      <DivideBox>
        <Image src={`data:image/jpeg;base64,${image}`} />
        <Content>
          <Popups
            topic="Do you want to delete?"
            content="If you delete this document will no longer exist."
            red
            confirm="Delete"
          />
          <TitleBook>
            {title}
            {' '}
          </TitleBook>
          <Line />
          <ManageButton type="button" onClick={() => onClick()}>EDIT</ManageButton>
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
