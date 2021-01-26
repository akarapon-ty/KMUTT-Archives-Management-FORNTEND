import React from 'react'

import { Space } from '../insertBook/styleAll'
import { InputFormat } from '../insertBook/InputField'
import { SelectorFormat } from '../insertBook/InputSelector'
import { InputAreaText } from '../insertBook/InputAreaText'
import SearchCard from '../search/searchCard/SearchCard'

const StepOne = (props) => {
  const { value } = props
  const {
    title,
    titleAlternative,
    tableOfContents,
    abstract,
    summary,
    note,
    coverageSpatial,
    coverageTemporal,
    coverageTemporalYear,
    rights,
    rightsAccess,
    creator,
    creatorOrgName,
    publisher,
    publisherEmail,
    contributor,
    contributorRole,
    issuedDate,
    image,
    tag,
  } = value

  const selectRA = [{
    val: 'Public',
    lab: 'Public',
  },
  ]

  const selectY = [{
    val: 'พ.ศ.',
    lab: 'พ.ศ.',
    selected: coverageTemporalYear === 'พ.ศ.' ? 'selected' : null,
  },
  {
    val: 'ค.ศ.',
    lab: 'ค.ศ.',
    selected: coverageTemporalYear === 'ค.ศ.' ? 'selected' : null,
  },
  ]

  return (
    <>
      <SearchCard title={title} creator={creator} coverageTemporal={coverageTemporal} tag={tag} image={image} />

      <h5>Title</h5>
      <InputFormat inputDefault={title} inputLabel="Title *" inputName="title" required />
      <InputFormat inputDefault={titleAlternative} inputLabel="Title Alternative" inputName="titleAlternative" />

      <h5>Creator</h5>
      <InputFormat inputDefault={creator} inputLabel="Creator Name" inputName="creator" />
      <InputFormat inputDefault={creatorOrgName} inputLabel="Creator Organization Name" inputName="creatorOrgName" />

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
      <InputFormat inputDefault={contributorRole[0]} inputLabel="Contributor Role" inputName="contributorRole" />

      <h5>Date</h5>
      <InputFormat types="date" inputDefault={issuedDate} inputLabel="Issued Date" inputName="issuedDate" />

      <h5>Coverage</h5>
      <InputFormat inputDefault={coverageSpatial} inputLabel="Coverage Spatial" inputName="coverageSpatial" />
      <SelectorFormat inputDefault={coverageTemporalYear} inputLabel="Coverage Tempooral Year" inputName="coverageTempooralYear" options={selectY} inputDefault2={coverageTemporal} inputLabel2="Year" inputName2="coverageTemporalMonth" />

      <h5>Rights</h5>
      <InputFormat inputDefault={rights} inputLabel="Rights" inputName="rights" />
      <SelectorFormat inputDefault={rightsAccess} inputLabel="Rights Access" inputName="rightsAccess" options={selectRA} />
      <Space />
    </>
  )
}

export default StepOne
