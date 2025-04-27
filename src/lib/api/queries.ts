import { client } from './apollo'
import { gql } from '@apollo/client'

export const getPinnedRepos = client.query({
  query: gql`
    {
      user(login: "luizfreitas27") {
        id
        pinnedItems(first: 6) {
          totalCount
          edges {
            node {
              ... on Repository {
                id
                description
                name
                url
                languages(
                  first: 10
                  orderBy: { field: SIZE, direction: DESC }
                ) {
                  edges {
                    node {
                      id
                      name
                      color
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `,
})

export const getUser = client.query({
  query: gql`
    {
      user(login: "luizfreitas27") {
        name
        url
        location
        bio
        avatarUrl
      }
    }
  `,
})

export const GET_PINNED_REPOSITORIES = gql`
  query GetPinnedRepositories($username: String!) {
    user(login: $username) {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            url
            stargazerCount
            forkCount
            primaryLanguage {
              name
              color
            }
          }
        }
      }
    }
  }
`;

export interface Repository {
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: {
    name: string;
    color: string;
  } | null;
}

export interface PinnedRepositoriesResponse {
  user: {
    pinnedItems: {
      nodes: Repository[];
    };
  };
}