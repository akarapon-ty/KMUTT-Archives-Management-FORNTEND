import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const RelaventYear = (props) => {
  const { setYearRange, block, setBlock } = props

  const { allMode, yearMode, rangeMode } = {
    allMode: 'all',
    yearMode: 'year',
    rangeMode: 'range',
  }

  const [radioState, setRadioState] = useState(allMode)

  const yearFixRef = useRef()
  const rangeFixRef = useRef()
  const rangeToFixRef = useRef()

  const year = new Date().getFullYear()

  useEffect(() => {
    if (radioState === allMode) {
      const newState = []
      setYearRange(newState)
      setBlock(false)
    } else if (radioState === yearMode) {
      const newState = [yearFixRef.current.value]
      setYearRange(newState)

      if (yearFixRef.current.value.length === 0) setBlock(true)
      else setBlock(false)
    } else if (radioState === rangeMode) {
      const newState = [rangeFixRef.current.value, rangeToFixRef.current.value]
      setYearRange(newState)

      if (rangeFixRef.current.value.length === 0 || rangeToFixRef.current.value.length === 0) setBlock(true)
      else setBlock(false)
    }
  }, [radioState])

  const handleActiveRadio = (mode) => {
    if (radioState === mode) return true
    return false
  }

  const handleClickRadio = (mode) => {
    setRadioState(mode)
  }

  const handleOnChangeFixYear = (slot) => {
    const re = /^[0-9\b]+$/

    if (radioState === yearMode) {
      const currentValue = yearFixRef.current.value

      if (currentValue === '' || re.test(currentValue)) {
        yearFixRef.current.value = currentValue
        if (yearFixRef.current.value.length === 0) setBlock(true)
        else setBlock(false)
      } else {
        yearFixRef.current.value = currentValue.substring(0, currentValue.length - 1)
      }

      const newState = [yearFixRef.current.value]
      setYearRange(newState)
    } else if (radioState === rangeMode) {
      if (slot === 1) {
        const currentValue = rangeFixRef.current.value

        if (currentValue === '' || re.test(currentValue)) {
          rangeFixRef.current.value = currentValue
          if (rangeFixRef.current.value.length === 0 || rangeToFixRef.current.value.length === 0) setBlock(true)
          else setBlock(false)
        } else {
          rangeFixRef.current.value = currentValue.substring(0, currentValue.length - 1)
        }
      } else if (slot === 2) {
        const currentValue = rangeToFixRef.current.value

        if (currentValue === '' || re.test(currentValue)) {
          rangeToFixRef.current.value = currentValue
          if (rangeFixRef.current.value.length === 0 || rangeToFixRef.current.value.length === 0) setBlock(true)
          else setBlock(false)
        } else {
          rangeToFixRef.current.value = currentValue.substring(0, currentValue.length - 1)
        }
      }

      const newState = [rangeFixRef.current.value, rangeToFixRef.current.value]
      setYearRange(newState)
    }
  }

  return (
    <>
      <RelaventYearLabel>Select Relavent Year</RelaventYearLabel>
      <RelaventYearSelectContainer>
        <RelaventYearRadioAllContainer>
          <RelaventYearInput type="radio" checked={handleActiveRadio(allMode)} onChange={() => handleClickRadio(allMode)} />
          <RelaventYearInputLabel>All</RelaventYearInputLabel>
        </RelaventYearRadioAllContainer>
        <RelaventYearRadioYearContainer block={2}>
          <RelaventYearInput type="radio" checked={handleActiveRadio(yearMode)} onChange={() => handleClickRadio(yearMode)} />
          <RelaventYearInputLabel>Year</RelaventYearInputLabel>
          <RelaventYearInputFixYear
            disabled={!handleActiveRadio(yearMode)}
            defaultValue={year}
            validate={handleActiveRadio(yearMode) && block}
            maxLength={4}
            ref={yearFixRef}
            onChange={() => handleOnChangeFixYear(null)}
          />
        </RelaventYearRadioYearContainer>
        <RelaventYearRadioRangeContainer block={4}>
          <RelaventYearInput type="radio" checked={handleActiveRadio(rangeMode)} onChange={() => handleClickRadio(rangeMode)} />
          <RelaventYearInputLabel>Range</RelaventYearInputLabel>
          <RelaventYearInputFixYear
            disabled={!handleActiveRadio(rangeMode)}
            defaultValue={1000}
            validate={handleActiveRadio(rangeMode) && block}
            maxLength={4}
            ref={rangeFixRef}
            onChange={() => handleOnChangeFixYear(1)}
          />
          <RelaventYearInputLabel>To</RelaventYearInputLabel>
          <RelaventYearInputFixYear
            disabled={!handleActiveRadio(rangeMode)}
            defaultValue={year}
            validate={handleActiveRadio(rangeMode) && block}
            maxLength={4}
            ref={rangeToFixRef}
            onChange={() => handleOnChangeFixYear(2)}
          />
        </RelaventYearRadioRangeContainer>
      </RelaventYearSelectContainer>
    </>
  )
}

RelaventYear.defaultProps = {
  setYearRange: () => {},
  block: false,
  setBlock: () => {},
}

RelaventYear.propTypes = {
  setYearRange: PropTypes.func,
  setBlock: PropTypes.func,
  block: PropTypes.bool,
}

const RelaventYearLabel = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 13px;

    color: #323232;
`
const RelaventYearSelectContainer = styled.div`
    display: grid;
    grid-template-rows: 34px 34px 34px;
`

const RelaventYearRadioAllContainer = styled.div`
    display: grid;
    grid-template-columns: 13px auto;
`
const RelaventYearRadioYearContainer = styled.div`
    display: grid;
    grid-template-columns: 13px 52px auto;
`
const RelaventYearRadioRangeContainer = styled.div`
    display: grid;
    grid-template-columns: 13px 52px auto auto auto;
`

const RelaventYearInput = styled.input`
    margin: auto 0;
    background: #FFFFFF;
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
`

const RelaventYearInputFixYear = styled.input`
    margin: auto 0 auto 3px;
    height: 25px;
    width: 52px;

    background: #FFFFFF;
    border: 1px solid ${({ validate }) => (validate ? 'red' : '#C4C4C4')};
    box-sizing: border-box;
    border-radius: 4px;

    text-align: center;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 13px;

    color: ${({ disabled }) => (disabled ? '#c4c4c4' : '#10A0A2')};
`

const RelaventYearInputLabel = styled.div`
    margin: auto 0 auto 12px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 31px;

    color: #323232;
`

export default RelaventYear
