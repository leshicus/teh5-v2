//@flow

// parameters
const logObj = <T: { a: string }>(obj: T) => {
  console.log(obj);
};
logObj({ a: "1" });

// generic type swears on difference from T
type T = number;
const takesOnlyNumber = (arg: T): T => {
  // arg = "1";
  // return 3;
  //const foo : T;
  return 3;
};
takesOnlyNumber("4");

//
