export const getItems = blocks => {
  let result = []
  let key = { key: 0 }
  let objLink = {}

  for (let block of blocks) {
    if (block.links && block.links.length) {
      key.key = key.key + 1

      objLink = {
        key: key.key,
        links: getLinksArray_1(block.links, key)
      }

      result.push(objLink)
    }
  }

  return result
}

export const getLinksArray_1 = (links, key) => {
  const result = []

  for (let link of links) {
    const obj = {}

    if (link.name) {
      key.key = key.key + 1
      obj["key"] = key.key

      obj["name"] = link.name

      if (link.url) {
        obj["url"] = "#" + link.url
      }

      if (link.isExpanded) {
        obj["isExpanded"] = link.isExpanded
      }

      if (link.links && link.links.length) {
        obj["links"] = getLinksArray_2(link.links, key)
      }

      result.push(obj)
    } else {
      continue
    }
  }

  return result
}

export const getLinksArray_2 = (links, key) => {
  const result = []

  for (let link of links) {
    const obj = {}

    if (link.name) {
      key.key = key.key + 1
      obj["key"] = key.key

      obj["name"] = link.name

      if (link.url) {
        obj["url"] = "#" + link.url
      }

      result.push(obj)
    } else {
      continue
    }
  }

  return result
}
