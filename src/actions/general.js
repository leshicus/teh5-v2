export const onClickSubLink = (event, routeElement) => {
  if (routeElement) {
    const el = document.getElementById(routeElement.name)
    if (el)
      el.scrollIntoView()
  }
}