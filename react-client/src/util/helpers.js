//@flow
import * as React from 'react'
import Loadable from 'react-loadable'

type LoadableOptionsType = {
  loader: () => void,
}

export const getLoadableComponent = (options: LoadableOptionsType) => {
  const Component = Loadable({
    loading() {
      return <div>Loading...</div>
    },
    ...options,
  })

  return <Component />
}
