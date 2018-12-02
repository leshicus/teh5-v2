/**
 * Handler for right menu item. Scrolls to chosen section.
 * @param {object} event
 * @param {object} routeElement
 */
export const onClickSubLink = (event, routeElement) => {
  if (routeElement) {
    const el = document.getElementById(routeElement.name)
    if (el) el.scrollIntoView()
  }
}
