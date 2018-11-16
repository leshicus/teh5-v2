//@flow
type A = Array<number> | Array<string>

// Error
//const a1: A = [1, 2];

const a2 = [1, 2]
const aFilteredString = a2.filter((item) => item)
// type casting
// ;(aFilteredString: A)

const a3 = ["a", "b"]

// ;(aFilteredString: Array<number>)
// Error
// (aFilteredString: Array<string>);

// const returnSelf = (arr: A) => arr
const filterAll = (arr) => arr.filter((item) => true)
const filterString = (arr) => arr.filter((item) => typeof item === "string")
const filterNumber = (arr) => arr.filter((item) => typeof item === "number")

const a2Filtered = filterAll(a2)
const a3Filtered = filterAll(a3)

//const mapString = (arr) => arr.map((item) => item)
