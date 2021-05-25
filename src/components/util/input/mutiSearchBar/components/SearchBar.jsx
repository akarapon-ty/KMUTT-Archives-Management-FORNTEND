import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import searchIcon from '../../../../../assets/icon/search_24px.png'

const SearchBar = (props) => {
  const {
    filterMode: prefix, setStore, disabled,
  } = props

  const inputRef = useRef()

  const handleIncomePrefix = (prefixInput) => {
    if (prefixInput !== null) return true
    return false
  }

  const handleLenghtPrefix = (prefixInput) => {
    if (prefixInput === 'Creator') return 74
    if (prefixInput === 'Creator Organization Name') return 199
    if (prefixInput === 'Contributor') return 100
    if (prefixInput === 'Contributor Role') return 132
    if (prefixInput === 'Publisher') return 88
    return 0
  }

  const handleOnSubmit = () => {
    const currInput = inputRef.current.value
    if (currInput !== '') {
      if (prefix === null) {
        const tokens = currInput.split(' ')
        tokens.forEach((token) => {
          setStore((prevState) => {
            const prevTokens = []
            prevState.forEach((element) => {
              if (element.prefix === null) prevTokens.push(element.value)
            })

            if (!prevTokens.includes(token)) return [...prevState, { prefix, value: token }]

            return [...prevState]
          })
        })
      } else {
        setStore((prevState) => {
          const prevTokens = []
          prevState.forEach((element) => {
            if (element.prefix !== null) prevTokens.push(element.value)
          })
          if (!prevTokens.includes(currInput)) return [...prevState, { prefix, value: currInput }]

          return [...prevState]
        })
      }
    }
    inputRef.current.value = null
  }

  const handleOnkey = (event) => {
    if (event.key === 'Enter') {
      handleOnSubmit()
    }
  }

  return (
    <SearchBarContainer lenght={handleLenghtPrefix(prefix)}>
      <PrefixSearchLabel activeFilter={handleIncomePrefix(prefix)}>
        {prefix}
        {' '}
        :
        {' '}
      </PrefixSearchLabel>
      <SearchInput
        disabled={disabled}
        ref={inputRef}
        activeFilter={handleIncomePrefix(prefix)}
        onKeyDown={(e) => handleOnkey(e)}
        placeholder=""
      />
      <IconSearchButton disabled={disabled} src={searchIcon} onClick={() => handleOnSubmit()} />
    </SearchBarContainer>
  )
}

SearchBar.defaultProps = {
  filterMode: null,
  setStore: () => {},
  disabled: false,
}

SearchBar.propTypes = {
  filterMode: PropTypes.string,
  setStore: PropTypes.func,
  disabled: PropTypes.bool,
}

const SearchBarContainer = styled.div`
    display: grid;
    grid-template-columns: ${({ lenght }) => lenght}px auto 38px;

    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 4px;
`

const PrefixSearchLabel = styled.div`
    display: ${({ activeFilter }) => (activeFilter ? 'block' : 'none')};
    grid-column-start: 1;
    margin: auto auto auto 16px;

    
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 13.33px;
    line-height: 12px;
    letter-spacing: 0.02em;
    color: #10A0A2;
`

const SearchInput = styled.input`
    grid-column-start: ${({ activeFilter }) => (activeFilter ? 2 : 1)};
    grid-column-end: 3;
    margin: ${({ activeFilter }) => (activeFilter ? '2px' : '2px 16px')};
    border: none;
    width: auto;
    height: auto;

    font-family: Roboto;
    font-style: normal;
    font-size: 13.33px;
    line-height: 12px;
    letter-spacing: 0.02em;
    color: #10A0A2;
    
    ${({ disabled }) => (disabled ? 'cursor: not-allowed;' : null)}

    &:focus {
        border: none;
        outline: none;
    }
`

const IconSearchButton = styled.img`
    grid-column-start: 3;
    width: auto;
    height: auto;
    margin: auto;

    ${({ disabled }) => (disabled ? 'pointer-events:none;' : null)}

    &:hover {
        
        cursor: ${({ disabled }) => (disabled ? 'cursor: not-allowed;' : 'pointer')};
    }
`

export default SearchBar
