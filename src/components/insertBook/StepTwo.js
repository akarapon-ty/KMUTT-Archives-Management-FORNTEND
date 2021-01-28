import React from 'react'

import { Space } from './styleAll'
import { InputFormat } from './InputField'
import { SelectorFormat } from './InputSelector'
import { InputAreaText } from './InputAreaText'

const StepTwo = (props) => {
  const { value } = props
  const {
    title,
    titleAlernative,
    creatorName,
    creatorOrganizationName,
    tableOfContents,
    summary,
    abstract,
    note,
    publisher,
    publisherEmail,
    contributor,
    contributorRole,
    issuedDate,
    coverageSpatial,
    coverageTemporalMonth,
    coverageTempooralYear,
    rights,
    rightsAccess,
  } = value

  const selectRA = [{
    val: 'Public',
    lab: 'Public',
  },
  ]

  const selectY = [{
    val: 'พ.ศ.',
    lab: 'พ.ศ.',
    selected: coverageTempooralYear === 'พ.ศ.' ? 'selected' : null,
  },
  {
    val: 'ค.ศ.',
    lab: 'ค.ศ.',
    selected: coverageTempooralYear === 'ค.ศ.' ? 'selected' : null,
  }]

  return (
    <>
      <h4>2. Fill the data</h4>
      <h5>Title</h5>
      <InputFormat inputDefault={title} inputLabel="Title *" inputName="title" required />
      <InputFormat inputDefault={titleAlernative} inputLabel="Title Alternative" inputName="titleAlernative" />

      <h5>Creator</h5>
      <InputFormat inputDefault={creatorName} inputLabel="Creator Name" inputName="creatorName" />
      <InputFormat inputDefault={creatorOrganizationName} inputLabel="Creator Organization Name" inputName="creatorOrganizationName" />

      <h5>Description</h5>
      <InputAreaText inputDefault={tableOfContents} inputLabel="Table of Contents" inputName="tableOfContents" />
      <InputAreaText inputDefault={summary} inputLabel="Summary" inputName="summary" />
      <InputAreaText inputDefault={abstract} inputLabel="Abstract" inputName="abstract" />
      <InputFormat inputDefault={note} inputLabel="Note" inputName="note" />

      <h5>Publisher</h5>
      <InputFormat inputDefault={publisher} inputLabel="Publisher" inputName="publisher" />
      <InputFormat inputDefault={publisherEmail} inputLabel="Publisher Email" inputName="publisherEmail" />

      <h5>Contributor</h5>
      <InputFormat inputDefault={contributor} inputLabel="Contributor" inputName="contributor" />
      <InputFormat inputDefault={contributorRole} inputLabel="Contributor Role" inputName="contributorRole" />

      <h5>Date</h5>
      <InputFormat types="date" inputDefault={issuedDate} inputLabel="Issued Date" inputName="issuedDate" />

      <h5>Coverage</h5>
      <InputFormat inputDefault={coverageSpatial} inputLabel="Coverage Spatial" inputName="coverageSpatial" />
      <SelectorFormat inputDefault={coverageTempooralYear} inputLabel="Coverage Tempooral Year" inputName="coverageTempooralYear" options={selectY} inputDefault2={coverageTemporalMonth} inputLabel2="Year" inputName2="coverageTemporalMonth" />

      <h5>Rights</h5>
      <InputFormat inputDefault={rights} inputLabel="Rights" inputName="rights" />
      <SelectorFormat inputDefault={rightsAccess} inputLabel="Rights Access" inputName="rightsAccess" options={selectRA} />
      <Space />
    </>
  )
}

export default StepTwo
