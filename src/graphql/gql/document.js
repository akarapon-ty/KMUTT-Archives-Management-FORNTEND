import { gql } from '@apollo/client'

export const addDocument = gql`
    addDocument(body{
                    addVersion,
                    name,
                    path,
                    DC_relation,
                    DC_type,
                    DC_title,
                    DC_title_alternative,
                    DC_description_table_of_contents,
                    DC_description_summary_or_abstract,
                    DC_description_note,
                    DC_format,
                    DC_format_extent,
                    DC_identifier_URL,
                    DC_identifier_ISBN,
                    DC_source,
                    DC_language,
                    DC_coverage_spatial,
                    DC_coverage_temporal,
                    DC_rights,
                    DC_rights_access,
                    thesis_degree_name,
                    thesis_degree_level,
                    thesis_degree_discipline,
                    thesis_degree_grantor,
                    DC_creator,
                    DC_creator_orgname,
                    DC_publisher,
                    DC_publisher_email,
                    DC_contributor,
                    DC_contributor_role,
                    DC_issued_date,
                }){
                    status,
                    message,
                    prevBody{
                        addVersion,
                        name,
                        path
                        DC_relation
                        DC_type
                        DC_title
                        DC_title_alternative
                        DC_description_table_of_contents
                        DC_description_summary_or_abstract
                        DC_description_note
                        DC_format
                        DC_format_extent
                        DC_identifier_URL
                        DC_identifier_ISBN
                        DC_source
                        DC_language
                        DC_coverage_spatial
                        DC_coverage_temporal
                        DC_rights
                        DC_rights_access
                        thesis_degree_name
                        thesis_degree_level
                        thesis_degree_discipline
                        thesis_degree_grantor
                        DC_creator
                        DC_creator_orgname
                        DC_publisher
                        DC_publisher_email
                        DC_contributor
                        DC_contributor_role
                        DC_issued_date
                        rec_create_by
                    }
                }
`
export default {}
