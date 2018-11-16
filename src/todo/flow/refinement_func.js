//@flow
type A = {| type: "A", param: number |}
type B = {| type: "B", param: string |}

function method(value) {
  // if (value.type === "A") {
  if (typeof value.param === "number") {
    return value.param
  } else {
    return value.param
  }
}

const resNum = method({ type: "A", param: 1 })
;(resNum: number)

const resStr = method({ type: "B", param: "1" })
;(resStr: string)
