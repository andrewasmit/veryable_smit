// External Dependencies
import {
  // QueryResult,
  gql,
  useQuery,
} from "@apollo/client";

export interface Continent {
  name: string;
  __typename: string;
}

export interface Language {
  native: string;
  __typename: string;
}

export interface State {
  name: string;
  __typename: string;
}

export interface Country {
  continent: Continent[];
  currency: string;
  emoji: string;
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
    }
  }
`;

export const useGetCountries = () => {
  return useQuery(GET_COUNTRIES);
};
