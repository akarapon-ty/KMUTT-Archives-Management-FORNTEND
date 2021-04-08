import styled from 'styled-components'

export const MutiSearchContainer = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;
    padding-top: 42px;
`

export const MainSearchContainer = styled.div`
    display: grid;
    grid-column-start: 1;
    grid-template-rows: 40px 54px auto;

    ${({ disabled }) => (disabled ? 'cursor: not-allowed;' : null)}
`

export const OptionalYearContainer = styled.div`
    margin: 5px auto 0 36px;
    display: grid;
    grid-template-rows: 22px auto;
`

export default {}
