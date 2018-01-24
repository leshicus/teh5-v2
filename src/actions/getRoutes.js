export const getItems = blocks => {
  let result = []

  for (let block of blocks) {
    for (let firstLevelItem of block.links) {
      /**
       * Upper level routes will include all internal sub-routes.
       * So it will show ALL sub-components when #/javascript/document is clicked
       */

      if (firstLevelItem.url) {
        for (let secondLevelItem of firstLevelItem.links) {
          if (secondLevelItem.name) {
            const obj = Object.assign({}, secondLevelItem)

            obj["url"] = firstLevelItem["url"]

            result.push(obj)
          }
        }
      }

      // Show ONLY sub-component when at sub-route #/javascript/document/window
      for (let secondLevelItem of firstLevelItem.links) {
        if (secondLevelItem.name) {
          const obj = Object.assign({}, secondLevelItem)

          obj["url"] = firstLevelItem["url"] + secondLevelItem["url"]

          result.push(obj)
        }
      }
    }
  }

  return result
}
