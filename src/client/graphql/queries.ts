import { gql } from '@apollo/client';

import type {
  AuthUserFragmentResponse,
  FeatureSectionFragmentResponse,
  ProductReviewFragmentResponse,
  ProductWithReviewFragmentResponse,
  RecommendationFragmentResponse,
} from './fragments';
import { AuthUserFragment, ProductReviewFragment, ProductWithReviewFragment } from './fragments';

export const GetMeQuery = gql`
  query Me {
    me {
      email
      id
      profile {
        avatar {
          id
          filename
        }
        id
        name
      }
    }
  }
`;

export const GetAuthUserQuery = gql`
  ${AuthUserFragment}

  query GetAuthUser {
    me {
      ...AuthUserFragment
    }
  }
`;
export type GetUserAuthQueryResponse = {
  me: AuthUserFragmentResponse | null;
};

export const GetProductReviewsQuery = gql`
  ${ProductReviewFragment}

  query GetProductReviews($productId: Int!) {
    product(id: $productId) {
      ...ProductReviewFragment
    }
  }
`;
export type GetProductReviewsQueryResponse = {
  product: ProductReviewFragmentResponse;
};

export const GetProductDetailsQuery = gql`
  ${ProductWithReviewFragment}

  query GetProductDetails($productId: Int!) {
    product(id: $productId) {
      ...ProductWithReviewFragment
    }
  }
`;
export type GetProductDetailsQueryResponse = {
  product: ProductWithReviewFragmentResponse;
};

export const GetRecommendationsQuery = gql`
  query GetRecommendations {
    recommendations {
      product {
        id
        name
        media {
          id
          file {
            id
            filename
          }
          isThumbnail
        }
        offers {
          id
          price
          startDate
          endDate
        }
        price
      }
    }
  }
`;
export type GetRecommendationsQueryResponse = {
  recommendations: RecommendationFragmentResponse[];
};

export const GetFeatureSectionsQuery = gql`
  query GetFeatureSections {
    features {
      items {
        product {
          id
          name
          price
          media {
            id
            file {
              id
              filename
            }
            isThumbnail
          }
          offers {
            id
            price
            startDate
            endDate
          }
        }
        id
      }
    }
  }
`;
export type GetFeatureSectionsQueryResponse = {
  features: FeatureSectionFragmentResponse[];
};
