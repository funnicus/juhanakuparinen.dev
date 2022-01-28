import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query {
    posts {
      title
      id
      publishDate
      status
      excerpt
      slug
      tags {
        name
      }
      content {
        document
      }
    }
  }
`;

export const GET_ONE_POST = gql`
  query post($slug: String!) {
    post(where: { slug: $slug }) {
      title
      id
      publishDate
      status
      excerpt
      slug
      tags {
        name
      }
      content {
        document
      }
    }
  }
`;
