//@flow
type A = Array<number> | Array<string>

// Error
const a1 = [1, 2]
const a = a1[0]
