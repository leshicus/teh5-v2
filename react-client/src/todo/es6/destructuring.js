/* Destructuring */

/* array */
const arr = [1, 2, 3, 4]
const [one, two, ...rest] = arr // one=1, two=2, rest=[3, 4]

/* iterate with "for of" */
const ent = rest.entries() // ent = [[Iterator]]
for (const [idx, val] of ent) {
  // idx = 0, 1
  // val = 3, 4
}

/* complex pattern */
const obj1 = { a: [{ foo: 123, bar: "abc" }, {}], b: true }
const {
  a: [{ foo: f }],
  b
} = obj1 // f=123, b=true

/* values coerce to objects */
const str = "124"
const { length: len } = str // len=3

const num = 123
const { toString: ts } = num //ts = Number.proptotype.toString

/* coercion to object */
;({} = [true])
// ;({} = null) // TypeError: ​​Cannot destructure 'undefined' or 'null'
// ;({} = undefined) // TypeError: ​​Cannot destructure 'undefined' or 'null'
;({} = 1)

/* array destructuring uses Iterator. Strings have iterator. That's why we could array destructure strings */
const str_1 = "abc"
const [first, second] = str_1 // first=a, second=b

/* object does't have Iterator */
const obj2 = { aa: 1, bb: 2 }
// const [aa, bb] = {obj2}; // can't iterate through object properties
