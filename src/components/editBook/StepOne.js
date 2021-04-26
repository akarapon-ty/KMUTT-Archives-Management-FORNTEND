import React from 'react'
import CloseIcon from '@material-ui/icons/Close'

import {
  Space, InsertButton, Inline, LeftRightBox, InputLabel, LeftCon, RightCon,
} from '../insertBook/css/styleAll'
import { InputFormat } from '../insertBook/InputField'
import { SelectorFormat } from '../insertBook/InputSelector'
import { InputAreaText } from '../insertBook/InputAreaText'
import { MultiInputFormat } from '../insertBook/MultiInputField'

import SearchCard from '../search/searchCard/SearchCard'

const StepOne = (props) => {
  const {
    value, handlerAddContributor, handlerOnChangeContributor, handlerOnChangeContributorRole, handlerRemoveContributor,
  } = props
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

  const contributorTemp = contributor.length === 0 ? [''] : contributor

  const contributorRoleTemp = contributorRole.length === 0 ? [''] : contributorRole

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

      <LeftRightBox>
        <h5>Contributor</h5>
        <InsertButton type="button" name="addContributor" onClick={() => handlerAddContributor()}>+ ADD</InsertButton>
      </LeftRightBox>
      <Inline long>
        <LeftCon>
          <InputLabel>Contributor</InputLabel>
          {contributorTemp.map((key, index) => (
            <div key={`div-${index * 5}`}>
              <MultiInputFormat
                handleOnChange={handlerOnChangeContributor}
                inputDefault={key}
                name={key}
                index={index}
                key={`Contributor-${index * 5}input`}
                inputLabel="Contributor"
              />
            </div>
          ))}
        </LeftCon>

        <RightCon>
          <InputLabel>Contributor Role</InputLabel>
          {contributorRoleTemp.map((key, index) => (
            <div key={`div-${index * 5}`}>
              <Inline long>
                <MultiInputFormat
                  handleOnChange={handlerOnChangeContributorRole}
                  inputDefault={key}
                  name={key}
                  index={index}
                  key={`ContributorRole-${index * 5}input`}
                  inputLabel="Contributor Role"
                />
                <InsertButton key={`ContributorRole-${index * 5}button`} value={key} onClick={() => handlerRemoveContributor(index)} type="button">
                  <CloseIcon />
                </InsertButton>
              </Inline>
            </div>
          ))}
        </RightCon>
      </Inline>

      <h5>Date</h5>
      <InputFormat types="date" inputDefault={issuedDate} inputLabel="Issued Date" inputName="issuedDate" />

      <h5>Coverage</h5>
      <InputFormat inputDefault={coverageSpatial} inputLabel="Coverage Spatial" inputName="coverageSpatial" />
      <SelectorFormat inputDefault={coverageTemporalYear} inputLabel="Coverage Temporal Year" inputName="coverageTemporalYear" options={selectY} inputDefault2={coverageTemporal} inputLabel2="Year" inputName2="coverageTemporal" />

      <h5>Rights</h5>
      <InputFormat inputDefault={rights} inputLabel="Rights" inputName="rights" />
      <SelectorFormat inputDefault={rightsAccess} inputLabel="Rights Access" inputName="rightsAccess" options={selectRA} />
      <Space />
    </>
  )
}

export default StepOne
