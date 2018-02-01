import React from "react"

import TopicTitle from "./TopicTitle"

/**
 * Represents the section of an article
 */
const Topic = props => {
  return (
    <section style={{ paddingBottom: "20px" }} id={props.id}>
      <TopicTitle title={props.title} />
      {props.children}
    </section>
  )
}

export default Topic
