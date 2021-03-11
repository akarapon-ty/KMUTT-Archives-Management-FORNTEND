import React from 'react'

import {
  Sep, TagText, TagTop, Cont, Detail,
} from './style'

const DatailBook = (props) => {
  const { document } = props
  return (
    <Detail>
      <Sep>
        <Cont>
          <TagTop>Title :</TagTop>
          {' '}
          <TagText>{document.title}</TagText>
          <br />

        </Cont>
        <Cont>
          <TagTop>Title Alternative :</TagTop>
          {' '}
          <TagText>{document.titleAlternative}</TagText>
          <br />

        </Cont>
        <Cont>
          <TagTop>Version :</TagTop>
          {' '}
          <TagText>{document.version}</TagText>
          <br />

        </Cont>
        <Cont>
          <TagTop>Amount of page :</TagTop>
          {' '}
          <TagText>{document.amountPage}</TagText>
          <br />

        </Cont>
        <Cont>
          <TagTop>Table of contents :</TagTop>
          {' '}
          <TagText>{document.tableOfContents}</TagText>
          <br />

        </Cont>
        <Cont>
          <TagTop>Summary :</TagTop>
          {' '}
          <TagText>{document.summary}</TagText>
          <br />

        </Cont>
        <Cont>
          <TagTop>Abstract :</TagTop>
          {' '}
          <TagText>{document.abstract}</TagText>
          <br />

        </Cont>
        <Cont>
          <TagTop>Note :</TagTop>
          {' '}
          <TagText>{document.note}</TagText>
          <br />

        </Cont>

        <Cont>
          <TagTop>Language :</TagTop>
          {' '}
          <TagText>{document.language}</TagText>
          <br />

        </Cont>
        <Cont>
          <TagTop>Coverage Spatial :</TagTop>
          {' '}
          <TagText>{document.coverageSpatial}</TagText>
          <br />

        </Cont>
        <Cont>
          <TagTop>Coverage Temporal :</TagTop>
          {' '}
          <TagText>{document.coverageTemporal}</TagText>
          <br />

        </Cont>
        <Cont>
          <TagTop>Coverage Temporal Year :</TagTop>
          {' '}
          <TagText>{document.coverageTemporalYear}</TagText>
          <br />

        </Cont>
        <Cont>
          <TagTop>Rights :</TagTop>
          {' '}
          <TagText>{document.rights}</TagText>
          <br />

        </Cont>
        <Cont>
          <TagTop>Rights Access :</TagTop>
          {' '}
          <TagText>{document.rightsAccess}</TagText>
          <br />

        </Cont>

        <Cont>
          <TagTop>Relation :</TagTop>
          {' '}
          <TagText>{document.relation}</TagText>
          <br />

        </Cont>

        <Cont>
          <TagTop>Creator :</TagTop>
          {' '}
          <TagText>{document.creator}</TagText>
          <br />

        </Cont>
        <Cont>
          <TagTop>Creator Organiation Name :</TagTop>
          {' '}
          <TagText>{document.creatorOrgName}</TagText>
          <br />

        </Cont>
        <Cont>
          <TagTop>Publisher :</TagTop>
          {' '}
          <TagText>{document.publisher}</TagText>
          <br />

        </Cont>
        <Cont>
          <TagTop>Publisher Email :</TagTop>
          {' '}
          <TagText>{document.publisherEmail}</TagText>
          <br />

        </Cont>
        <Cont>
          <TagTop>Contributor :</TagTop>
          {' '}
          <TagText>{document.contributor}</TagText>
          <br />

        </Cont>
        <Cont>
          <TagTop>Contributor Role :</TagTop>
          {' '}
          <TagText>{document.contributorRole}</TagText>
          <br />

        </Cont>
        <Cont>
          <TagTop>IssuedDate :</TagTop>
          {' '}
          <TagText>{document.issuedDate}</TagText>
          <br />

        </Cont>
      </Sep>
      <Sep>
        <Cont>
          <TagTop>Source :</TagTop>
          {' '}
          <TagText>{document.source}</TagText>
          <br />

        </Cont>
        <Cont>
          <TagTop>Format :</TagTop>
          {' '}
          <TagText>{document.format}</TagText>
          <br />
        </Cont>
        <Cont>
          <TagTop>Format Extent :</TagTop>
          {' '}
          <TagText>{document.formatExtent}</TagText>
          <br />
        </Cont>
        <Cont>
          <TagTop>Identifier URL :</TagTop>
          {' '}
          <TagText>{document.identifierURL}</TagText>
          <br />

        </Cont>
        <Cont>
          <TagTop>Identifier ISBN :</TagTop>
          {' '}
          <TagText>{document.identifierISBN}</TagText>
          <br />

        </Cont>

        <Cont>
          <TagTop>Rec Create At :</TagTop>
          {' '}
          <TagText>{document.recCreateAt}</TagText>
          <br />

        </Cont>
        <Cont>
          <TagTop>Rec Create By :</TagTop>
          {' '}
          <TagText>{document.recCreateBy}</TagText>
          <br />

        </Cont>
        <Cont>
          <TagTop>Rec Modified At :</TagTop>
          {' '}
          <TagText>{document.recModifiedAt}</TagText>
          <br />

        </Cont>
        <Cont>
          <TagTop>Rec Modified By :</TagTop>
          {' '}
          <TagText>{document.recModifiedBy}</TagText>
          <br />

        </Cont>
        <Cont>
          <TagTop>Type :</TagTop>
          {' '}
          <TagText>{document.type}</TagText>
          <br />
        </Cont>
        <Cont>
          <TagTop>Thesis Degree Name :</TagTop>
          {' '}
          <TagText>{document.thesisDegreeName}</TagText>
          <br />

        </Cont>
        <Cont>
          <TagTop>Thesis Degree Level :</TagTop>
          {' '}
          <TagText>{document.thesisDegreeLevel}</TagText>
          <br />

        </Cont>
        <Cont>
          <TagTop>Thesis Degree Discipline :</TagTop>
          {' '}
          <TagText>{document.thesisDegreeDiscipline}</TagText>
          <br />

        </Cont>
        <Cont>
          <TagTop>Thesis Degree Grantor :</TagTop>
          {' '}
          <TagText>{document.thesisDegreeGrantor}</TagText>
          <br />

        </Cont>
      </Sep>
    </Detail>
  )
}

export default DatailBook
