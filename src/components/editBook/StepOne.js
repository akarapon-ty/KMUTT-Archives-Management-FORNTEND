import React from 'react'
import PropTypes from 'prop-types'

import { Space } from '../insertBook/styleAll'
import { InputFormat } from '../insertBook/InputField'
import { SelectorFormat } from '../insertBook/InputSelector'
import { InputAreaText } from '../insertBook/InputAreaText'
import { SearchResult } from '../search'

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
    coverageTempooralYear,
    rights,
    rightsAccess,
    creator,
    creatorOrgName,
    publisher,
    publisherEmail,
    contributor,
    contributorRole,
    issuedDate,
  } = value

  const selectRA = [{
    val: 'Public',
    lab: 'Public',
  },
  ]

  const selectY = [{
    val: 'พ.ศ.',
    lab: 'พ.ศ.',
  },
  {
    val: 'ค.ศ.',
    lab: 'ค.ศ.',
  },
  ]

  return (
    <>
      <SearchResult title={title} creator={creator} coverageTemporal={coverageTemporal} tag={[]} />

      <h5>Title</h5>
      <InputFormat inputDefault={title} inputLabel="Title *" inputName="title" required />
      <InputFormat inputDefault={titleAlternative} inputLabel="Title Alternative" inputName="titleAlernative" />

      <h5>Creator</h5>
      <InputFormat inputDefault={creator} inputLabel="Creator Name" inputName="creatorName" />
      <InputFormat inputDefault={creatorOrgName} inputLabel="Creator Organization Name" inputName="creatorOrganizationName" />

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
      <SelectorFormat inputDefault={coverageTempooralYear} inputLabel="Coverage Tempooral Year" inputName="coverageTempooralYear" options={selectY} inputDefault2={coverageTemporal} inputLabel2="Year" inputName2="coverageTemporalMonth" />

      <h5>Rights</h5>
      <InputFormat inputDefault={rights} inputLabel="Rights" inputName="rights" />
      <SelectorFormat inputDefault={rightsAccess} inputLabel="Rights Access" inputName="rightsAccess" options={selectRA} />
      <Space />
    </>
  )
}

InputFormat.defaultProps = {
  title: 'Default',
  titleAlternative: '',
  tableOfContents: '',
  abstract: '',
  note: '',
  coverageSpatial: '',
  coverageTemporalMonth: '',
  coverageTempooralYear: '',
  rights: '',
  rightsAccess: '',
  creatorName: '',
  creatorOrganizationName: '',
  publisher: '',
  publisherEmail: '',
  contributor: '',
  contributorRole: '',
  issuedDate: '',
}

InputFormat.propTypes = {
  title: PropTypes.string,
  titleAlternative: PropTypes.string,
  tableOfContents: PropTypes.string,
  abstract: PropTypes.string,
  note: PropTypes.string,
  coverageSpatial: PropTypes.string,
  coverageTemporalMonth: PropTypes.string,
  coverageTempooralYear: PropTypes.string,
  rights: PropTypes.string,
  rightsAccess: PropTypes.string,
  creatorName: PropTypes.string,
  creatorOrganizationName: PropTypes.string,
  publisher: PropTypes.string,
  publisherEmail: PropTypes.string,
  contributor: PropTypes.string,
  contributorRole: PropTypes.string,
  issuedDate: PropTypes.string,

}

export default StepOne
