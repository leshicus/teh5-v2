//@flow
const R = require("ramda");
// import * as R from "ramda";
type User = {
  id: number,
  fio: {
    name: string,
    lastname: string
  },
  cars: Array<{
    name: string,
    year: string
  }>
};
type Users = Array<User>;

const users: Users = [
  {
    id: 1,
    fio: {
      name: "Alex",
      lastname: "Jones"
    },
    cars: [
      {
        name: "BMW",
        year: "2018"
      },
      {
        name: "Mercedes",
        year: "2017"
      }
    ]
  },
  {
    id: 2,
    fio: {
      name: "Max",
      lastname: "Fray"
    },
    cars: [
      {
        name: "Scoda",
        year: "2019"
      }
    ]
  }
];

// * 1) my lens realization
const myLens = (
  getter: (obj: User) => User,
  setter: (val: any, obj: User) => User
) => ({
  get: (obj: User) => getter(obj),
  set: (val, obj: User) => setter(val, obj)
});

const myGetter = (prop: string) => {
  return (obj: User) => {
    return obj[prop];
  };
};

const mySetter = (prop: string) => {
  return (val: any, obj: User) => {
    const out = Object.assign({}, obj, {
      [prop]: val
    });
    return out;
  };
};

const myLensId = myLens(myGetter("id"), mySetter("id"));
users[0] = myLensId.set("100", users[0]);
// console.log(myLensId.get(users[0]));

const myLensFio = myLens(myGetter("fio"), mySetter("fio"));
// Bad, because fio loose property "lastname"
users[0] = myLensFio.set({ name: "Alex_1" }, users[0]);
// console.log(myLensFio.get(users[0]));

// * RAMDA
const lenseRamdaFio = R.lensProp("fio");
// Bad, because fio loose property "lastname"
// users[1] = R.set(lenseRamdaFio, { name: "Shmoris" }, users[1]);
// console.log(R.view(lenseRamdaFio, users[1]));

const pathUserName = R.lensPath(["fio", "name"]);
const pathUserLastname = R.lensPath(["fio", "lastname"]);
// Good
users[1] = R.set(pathUserName, "Max_1", users[1]);
users[1] = R.set(pathUserLastname, "Fray_1", users[1]);
console.log(R.view(pathUserName, users[1]));
console.log(R.view(pathUserLastname, users[1]));
console.log(users[1]);
