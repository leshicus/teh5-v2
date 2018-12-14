//@flow
const arrNum = [1, 2]
const arrStr = ["a", "b"]

// we need to annotate func with generics if we are going to pass objects with different types in to it
const returnSelf = <T>(param: T): T => param

const fooFoo = (arr) => returnSelf(arr)
const arrNumFooFoo = fooFoo(arrNum)
;(arrNumFooFoo: Array<number>)

const barBar = (arr) => returnSelf(arr)
const arrStrBarBar = barBar(arrStr)
;(arrStrBarBar: Array<string>)
