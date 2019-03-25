//@flow
import * as React from 'react'
import axios from 'axios'

// const styles = {
//   root: {},
// }

export class GraphQL extends React.Component<{}> {
  state = {
    textblocks: [],
  }

  componentDidMount() {
    this.getQuery()
  }

  getQuery = async () => {
    try {
      const { data: { data } } = await axios.post('/graphql', {
        query: `query {
          textblocks{
            _id
            id
            description
            lessons{
              id
              description
              texts{
                id
                title{
                  rus
                }
              }
            }
          }
        }`,
      })

      if (data && data.textblocks) {
        this.setState({
          textblocks: data.textblocks,
        })
      }
      console.log(data)
    } catch (errors /* { response: { data: { errors } } } */) {
      console.log(errors)
    }
  }

  render() {
    return (
      <div>
        {this.state.textblocks.length && (
          <ul>
            {this.state.textblocks.map(textblock => (
              <div key={textblock.id}>
                <li>{`${textblock.id}. ${textblock.description}`}</li>
                {textblock.lessons && (
                  <ul>
                    {textblock.lessons.map(lesson => (
                      <div key={lesson.id}>
                        <li>{`${lesson.id}. ${lesson.description}`}</li>
                        {lesson.texts && (
                          <ul>
                            {lesson.texts.map(text => (
                              <li key={text.id}>{`${text.id}. ${text.title
                                .rus}`}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </ul>
        )}
      </div>
    )
  }
}
