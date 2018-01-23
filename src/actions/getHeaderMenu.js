import { ContextualMenuItemType } from "office-ui-fabric-react/lib/ContextualMenu"

export const getItems = arrInitial => {
  let result = []
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

    if (item.href) {
      obj["href"] = item.href
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

    if (item.name && !item.sectionProps) {
      key.key = key.key + 1
      obj["key"] = key.key
      obj["name"] = item.name

      if (item.href) {
        obj["href"] = item.href
      }
    } else if (!item.name && item.sectionProps) {
      key.key = key.key + 1
      obj["key"] = key.key
      obj["itemType"] = ContextualMenuItemType.Section
      obj["sectionProps"] = getSectionProps(item.sectionProps, key)
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

export const getSectionProps = (sectionProps, key) => {
  const result = {}

  key.key = key.key + 1
  result["key"] = key.key

  if (sectionProps.title) {
    result["title"] = sectionProps.title
  }

  if (sectionProps.items && sectionProps.items.length) {
    result["items"] = getSectionPropsItems(sectionProps.items, key)
  }

  return result
}

export const getSectionPropsItems = (items, key) => {
  const result = []

  for (let item of items) {
    const obj = {}

    if (item.name) {
      key.key = key.key + 1
      obj["key"] = key.key
      obj["name"] = item.name
      obj["href"] = item.href
    } else {
      continue
    }

    if (Object.keys(obj).length) {
      result.push(obj)
    }
  }

  return result
}
