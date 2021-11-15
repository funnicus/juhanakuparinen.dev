import { gql } from '@apollo/client';

const POST_DETAILS = gql`
  fragment PostDetails on Post {
    title
      id
      publishDate
      status
      excerpt
      tags {
        name
      }
      content {
        document
      }
  }
`;

export const GET_POSTS = gql`
  query {
    posts {
      ...PostDetails
    }
  }
  ${POST_DETAILS}
`;

export const GET_ONE_POST = gql`
  query post($id: ID!){
    post(where: { id: $id }) {
      ...PostDetails
    }
  }
  ${POST_DETAILS}
`;