import { gql } from "graphql-tag"

export const CreateReview = gql`
  mutation CreateReview(
    $reviewContent: String!
    $rating: String!
    $id: ID!
    $userID: ID!
  ) {
    createReview(
      data: {
        content: $reviewContent
        rating: $rating
        laptop: $id
        user: $userID
      }
    ) {
      data {
        id
        attributes {
          content
          user {
            data {
              id
              attributes {
                username
              }
            }
          }
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
