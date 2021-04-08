import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import cancelIcon from '../../../../../assets/icon/cancel_icon.png'

const StoreTokenBar = (props) => {
  const { store, setStore, disabled } = props

  const handleOnCancel = (index) => {
    setStore((prevState) => {
      const newArr = [...prevState]
      newArr.splice(index, 1)
      return [...newArr]
    })
  }

  return (
    <StoreTokenBarContainer>
      {store.map((element, index) => (
        <TokenCard key={`${element.prefix}|${element.value}|${index + 1 - 1}`}>
          <TextTokenCard>
            {element.prefix === null ? null : `${element.prefix} : `}
            {element.value}
          </TextTokenCard>
          <IconCancelButton disabled={disabled} src={cancelIcon} onClick={() => handleOnCancel(index)} />
        </TokenCard>
      ))}
    </StoreTokenBarContainer>
  )
}

StoreTokenBar.defaultProps = {
  store: [],
  setStore: () => {},
  disabled: false,
}

StoreTokenBar.propTypes = {
  store: PropTypes.arrayOf(PropTypes.shape({
    prefix: PropTypes.string,
    value: PropTypes.string,
  })),
  setStore: PropTypes.func,
  disabled: PropTypes.bool,
}

const StoreTokenBarContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0px;
    row-gap: 2px;
    column-gap: 2px;
`

const TokenCard = styled.div`
    display: flex;
    padding: 10px 10px;
    width: auto;
    height: auto;

    background: #10A0A2;
    border: 1px solid rgba(16, 160, 162, 0.4);
    box-sizing: border-box;
    border-radius: 4px;
`

const TextTokenCard = styled.div`
    margin: auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 11px;

    color: #FFFFFF;
`

const IconCancelButton = styled.img`
    width: 14px;
    height: 14px;
    margin: auto auto auto 3px;

    ${({ disabled }) => (disabled ? 'pointer-events:none;' : null)}

    &:hover {
        cursor: ${({ disabled }) => (disabled ? 'cursor: not-allowed;' : 'pointer')};
    }
`

export default StoreTokenBar
