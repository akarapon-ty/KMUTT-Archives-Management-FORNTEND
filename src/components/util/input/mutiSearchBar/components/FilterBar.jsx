import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const FilterBar = (props) => {
  const {
    prefixCreator,
    prefixCreatorOrg,
    prefixContributor,
    prefixContributorRole,
    prefixPublisher,
  } = {
    prefixCreator: 'Creator',
    prefixCreatorOrg: 'Creator Organization Name',
    prefixContributor: 'Contributor',
    prefixContributorRole: 'Contributor Role',
    prefixPublisher: 'Publisher',
  }

  const { filterMode: prefix, onClick, disabled } = props

  const handlePrefixCreator = (prefixFilter) => {
    if (prefixFilter === 'Creator') return true
    return false
  }

  const handlePrefixCreatorOrg = (prefixFilter) => {
    if (prefixFilter === 'Creator Organization Name') return true
    return false
  }

  const handlePrefixContributor = (prefixFilter) => {
    if (prefixFilter === 'Contributor') return true
    return false
  }

  const handlePrefixContributorRole = (prefixFilter) => {
    if (prefixFilter === 'Contributor Role') return true
    return false
  }

  const handlePrefixPublisher = (prefixFilter) => {
    if (prefixFilter === 'Publisher') return true
    return false
  }

  const handleOnClick = (prefixFilter) => {
    onClick((prevState) => {
      if (prevState === prefixFilter) return null
      return prefixFilter
    })
  }

  return (
    <FilterBarContainer>
      <PrefixFilterLabel>Filter : </PrefixFilterLabel>
      <FilterCard disabled={disabled} active={handlePrefixCreator(prefix)} onClick={() => handleOnClick(prefixCreator)}>
        <TextFilterCard active={handlePrefixCreator(prefix)}>Creator</TextFilterCard>
      </FilterCard>
      <FilterCard disabled={disabled} active={handlePrefixCreatorOrg(prefix)} onClick={() => handleOnClick(prefixCreatorOrg)}>
        <TextFilterCard active={handlePrefixCreatorOrg(prefix)}>Creator Organization Name</TextFilterCard>
      </FilterCard>
      <FilterCard disabled={disabled} active={handlePrefixContributor(prefix)} onClick={() => handleOnClick(prefixContributor)}>
        <TextFilterCard active={handlePrefixContributor(prefix)}>Contributor</TextFilterCard>
      </FilterCard>
      <FilterCard disabled={disabled} active={handlePrefixContributorRole(prefix)} onClick={() => handleOnClick(prefixContributorRole)}>
        <TextFilterCard active={handlePrefixContributorRole(prefix)}>Contributor Role</TextFilterCard>
      </FilterCard>
      <FilterCard disabled={disabled} active={handlePrefixPublisher(prefix)} onClick={() => handleOnClick(prefixPublisher)}>
        <TextFilterCard active={handlePrefixPublisher(prefix)}>Publisher</TextFilterCard>
      </FilterCard>
    </FilterBarContainer>
  )
}

FilterBar.defaultProps = {
  onClick: () => { },
  filterMode: null,
  disabled: false,
}
FilterBar.propTypes = {
  onClick: PropTypes.func,
  filterMode: PropTypes.string,
  disabled: PropTypes.bool,
}

const FilterBarContainer = styled.div`
    display: grid;
    margin: 0;
    grid-template-columns: 50px repeat(5, auto);
    border-bottom: 1px solid #E5E5E5;
`

const PrefixFilterLabel = styled.div`
    grid-column-start: 1;
    margin: auto;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13.33px;
    line-height: 11px;

    color: #323232;
`

const FilterCard = styled.div`
    margin: auto;
    padding: 10px 12px;
    width: auto;
    height: auto;

    background: ${({ active }) => (active ? '#10A0A2' : '#FFFFFF')};
    border: 1px solid rgba(16, 160, 162, 0.4);
    box-sizing: border-box;
    border-radius: 4px;

    ${({ disabled }) => (disabled ? 'pointer-events:none;' : null)}

    &:hover {
        cursor: ${({ disabled }) => (disabled ? 'cursor: not-allowed;' : 'pointer')};
    }
`

const TextFilterCard = styled.div`
    margin: auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 11px;

    color: ${({ active }) => (active ? '#FFFFFF' : '#10A0A2')};
`

export default FilterBar
