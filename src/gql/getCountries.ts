// External Dependencies
import { gql, useQuery } from "@apollo/client";

const GET_COUNTRIES = gql`
  query Query {
    countries {
      currency
      states {
        name
      }
      languages {
        native
      }
      continent {
        name
      }
      name
      emoji
      emojiU
    }
  }
`;

export const useGetCountries = () => {
  return useQuery(GET_COUNTRIES);
};
