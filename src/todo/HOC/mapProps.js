//@flow
import { mapProps } from "recompose";
import * as React from "react";

type ResType = { res: number };
type ArgType = { arg: number };

// mapProps from recompose
const MyComp = ({ res }: ResType) => <div>res = {res}</div>;
const propsMapper = ({ arg }: ArgType): ResType => ({ res: arg * arg });
const EnhancedComp = mapProps(propsMapper)(MyComp);

<EnhancedComp arg={2} />;

//
//
//
// our own implementation of mapProps

const myMapProps = <InputProps: {}, OutputProps: {}>(
  mapperFun: (InputProps) => OutputProps
): ((React.ComponentType<OutputProps>) => React.ComponentType<InputProps>) => {
  return (Comp) => <Comp {...OutputProps} />;
};

const MyEnhancedComp = myMapProps(propsMapper)(MyComp);

<MyEnhancedComp arg={2} />;
