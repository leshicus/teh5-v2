//@flow

type State = {
  key1: {|
    child1: number
  |},
  key2: {|
    child2: string
  |}
}

type propType = <T: string>(key: T) => <O: Object>(o: O) => $ElementType<O, T>

const getKey: propType = (key) => (obj) => obj[key]

const state: State = {
  key1: { child1: 2 },
  key2: { child2: "text" }
}

const getKey1 = getKey("key1")
const getKey2 = getKey("key2")

const resState1 = getKey1(state)
const resState2 = getKey2(state)

const final1 = resState1.child2 // should be error
const final2 = resState2.child2
