// External Dependencies
import { QueryResult, gql, useQuery } from "@apollo/client";

interface Continent {
  name: string;
  __typename: string;
}

interface Language {
  native: string;
  __typename: string;
}

interface State {
  name: string;
  __typename: string;
}

export interface Country {
  continent: Continent[];
  currency: string;
  emoji: string;
  emojiU: string;
  languages: Language[];
  name: string;
  states: State[];
}

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

export const useGetCountries = (): QueryResult<Country> => {
  return useQuery(GET_COUNTRIES);
};
