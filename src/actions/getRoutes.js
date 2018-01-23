export const getItems = blocks => {
  let result = []

  for (let block of blocks) {
    for (let firstLevelItem of block.links) {
      for (let secondLevelItem of firstLevelItem.links) {
        if (secondLevelItem.name) {
          secondLevelItem["url"] = secondLevelItem["url"]

          result.push(secondLevelItem)
        }
      }
    }
  }

  return result
}
