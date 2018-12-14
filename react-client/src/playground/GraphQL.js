//@flow
import * as React from 'react'
import axios from 'axios'

// const styles = {
//   root: {},
// }

export class GraphQL extends React.Component<{}> {
  componentDidMount() {
    this.getQuery()
  }

  getQuery = async () => {
    try {
      const { data: { data } } = await axios.post('/graphql', {
        query: `query {
          responses
        }`,
      })

      console.log(data)
    } catch (errors /* { response: { data: { errors } } } */) {
      console.log(errors)
    }
  }

  render() {
    return <div>GraphQL</div>
  }
}
