//@flow
type A = {
  name: string,
  param: number
}

type B = {
  name: string,
  param: string
}

const a = {
  name: "a",
  param: 1
}

const b = {
  name: "b",
  param: "1"
}

// const c = (window.c: A | B)

// if (c.name === "a") {
//   c
// }

////////////////////////////////////////
// Annotated function
const bar = <G: string | number, T: { name: string, param: G }>(obj: T): G => {
  if (typeof obj.param === "number") {
    // if (obj.name === "a") {
    // we can't refine by voluntary field, just by one, which could be differrent
    ;(obj.param: number)
    return obj.param
  } else {
    ;(obj.param: string)
    return obj.param
  }
}

const n = bar(a) // n: number
;(n: number)

const s = bar(b) // s: string
;(s: string)

////////////////////////////////////////
// Not annotated function
// const foo = (obj) => {
//   // if (obj.name === "a") {
//   if (typeof obj.param === "number") {
//     ;(obj.param: number)
//     return obj.param
//   } else {
//     ;(obj.param: string)
//     return obj.param
//   }
// }

// // we can't refine by passing value to function
// const nn = foo(a) // nn: string | number
// ;(nn: number)

// const ss = foo(b) // ss: string | number
// ;(ss: string)
