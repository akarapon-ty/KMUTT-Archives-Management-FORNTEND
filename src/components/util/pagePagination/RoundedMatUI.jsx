import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'

const useStyles = makeStyles(() => ({
  ul: {
    '& .MuiPaginationItem-root': {
      color: '#10A0A2',

      '&:hover': {
        backgroundColor: '#E5E5E5',
        color: '#10A0A2',
      },
    },

    '& .Mui-selected': {
      backgroundColor: '#10A0A2',
      color: '#E5E5E5',
    },
  },
}))

const RoundedMatUI = (props) => {
  const { page, setPage, totalPage } = props
  const classes = useStyles()

  return (
    <RoundedMatUIContainer>
      <Pagination
        page={page}
        onChange={setPage}
        classes={{ ul: classes.ul }}
        count={totalPage}
        shape="rounded"
      />
    </RoundedMatUIContainer>
  )
}

RoundedMatUI.defaultProps = {
  page: 1,
  setPage: () => {},
  totalPage: 1,
}

RoundedMatUI.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  totalPage: PropTypes.number,
}

const RoundedMatUIContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    padding: 30px 0px;
`

export default RoundedMatUI
