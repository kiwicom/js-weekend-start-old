import { Query } from "react-apollo"
import gql from "graphql-tag"
import Alert from "@kiwicom/orbit-components/lib/Alert"
import Loading from "@kiwicom/orbit-components/lib/Loading"

// import Debug from "../components/debug"

const Debug = props => (
  <code>
    <pre>{JSON.stringify(props, null, 2)}</pre>
  </code>
)

export const continentsQuery = gql`
  query {
    continents {
      name
    }
  }
`

export default () => (
  <Query
    query={continentsQuery}
    context={{ uri: "https://countries.trevorblades.com/" }}
  >
    {({ loading, error, data }) => {
      if (loading) return <Loading loading type="boxLoader" />
      if (error)
        return (
          <Alert type="critical" title="Error!">
            ${error.message}
          </Alert>
        )
      return <Debug {...data} />
    }}
  </Query>
)
