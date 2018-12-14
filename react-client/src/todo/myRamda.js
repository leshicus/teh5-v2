//@flow
// ramda/pick
export const myPick: (Array<any>, Object) => Object = (arrProp, obj) => {
  // export const myPick = (arrProp, obj) => {
  const result = {}

  arrProp.forEach((prop) => {
    result[prop] = obj[prop]
  })

  return result
}

console.log("myPick", myPick(["b"], { a: 1, b: 2, c: 3 })) // {b: 2}
