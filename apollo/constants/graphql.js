import { gql } from "graphql-tag"

export const CreateReview = gql`
  mutation CreateReview($reviewContent: String!, $rating: String!, $id: ID!) {
    createReview(
      data: { content: $reviewContent, rating: $rating, laptop: $id }
    ) {
      data {
        id
        attributes {
          content
          rating
          laptop {
            data {
              id
            }
          }
        }
      }
    }
  }
`
