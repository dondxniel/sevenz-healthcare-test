import { gql } from "graphql-tag";
export const RETRIEVE_DATA = gql`
  query {
    investigations {
      id
      title
      type {
        title
      }
    }
  }
`;
export const CREATE_MEDICAL_RECORD = gql`
  mutation (
    $investigations: [ID!]!
    $ctscan: String!
    $mri: String!
    $developer: String!
  ) {
    add_medical_record(
      investigations: $investigations
      ctscan: $ctscan
      mri: $mri
      developer: $developer
    ) {
      id
      patient {
        name
      }
    }
  }
`;
