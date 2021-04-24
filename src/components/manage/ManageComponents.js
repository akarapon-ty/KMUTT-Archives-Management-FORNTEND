import React, { useState } from 'react'

import ManageResult from './ManageResult'
import MutiSearchBar from '../util/input/mutiSearchBar/MutiSearchBar'

const ManageComponents = () => {
  const [storeTokenState, setStoreTokenState] = useState([])
  const [yearRangeState, setYearRangeState] = useState([])

  return (
    <div>
      <h3>Manage KMUTT Archives</h3>
      <MutiSearchBar
        storeToken={storeTokenState}
        yearRange={yearRangeState}
        setStoreToken={setStoreTokenState}
        setYearRange={setYearRangeState}
      />
      <ManageResult searchToken={storeTokenState} yearRange={yearRangeState} />
    </div>
  )
}

export default ManageComponents
