import { ContextualMenuItemType } from "office-ui-fabric-react/lib/ContextualMenu"

export const getItems = arrInitial => {
  const result = []
  let key = { key: 0 }

  if (arrInitial && arrInitial.forEach && arrInitial.length) {
    result = getHeaderItems(arrInitial, key)
  }

  return result
}

export const getHeaderItems = (items, key) => {
  const result = []

  for (let item of items) {
    const obj = {}

    if (item.name) {
      key.key = key.key + 1
      obj["key"] = key.key
      obj["name"] = item.name
    } else {
      continue
    }

    if (item.disabled) {
      obj["disabled"] = item.disabled
    }

    if (item.iconName) {
      obj["iconProps"] = { iconName: item.iconName }
    }

    if (item.items && item.items.forEach && item.items.length) {
      obj["items"] = getMenuItems(item.items, key)
    }

    if (Object.keys(obj).length) {
      result.push(obj)
    }
  }

  return result
}

export const getMenuItems = (items, key) => {
  const result = []

  for (let item of items) {
    const obj = {}

    if (item.name) {
      key.key = key.key + 1
      obj["key"] = key.key
      obj["name"] = item.name
    } else {
      continue
    }

    if (item.iconName) {
      obj["iconProps"] = { iconName: item.iconName }
    }

    if (Object.keys(obj).length) {
      result.push(obj)
    }
  }

  return result
}
