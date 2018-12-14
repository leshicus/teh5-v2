//@flow
import { getLoadableComponent } from './../util/helpers'

export const gatLoadablePlayground = (name: string) =>
  getLoadableComponent({
    loader: () =>
      //$FlowIgnore
      import(`./../playground/${name}`).then(module => module[name]),
  })
