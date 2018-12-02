/**
 * Setting to allow showing the console messages while running tests
 */
global.requestAnimationFrame = cb => {
  setTimeout(cb, 0)
}
