// HOC- High order component
//@flow
import * as React from "react";

type AnimalType = { type?: string, name: string };
type DomesticType = { homeAddress: string };

export class Animal extends React.Component<AnimalType | DomesticType> {
  constructor(props: AnimalType & DomesticType) {
    super(props);
    console.log(props);
  }
  render() {
    return null;
  }
}

const domesticate = <Props, Component: React.ComponentType<Props>>(
  AnimalComponent: Component,
  homeAddress: string
): <Props>=>React.ComponentType<$Diff<Props, { homeAddress: string }>> => {
  return (props) => <AnimalComponent {...props} homeAddress={homeAddress} />;
};

const nameAnimal = <Props, Component: React.ComponentType<Props>>(
  WrappedComponent: Component,
  name: string
): React.ComponentType<React.ElementConfig<Component>> => {
  return (props) => <WrappedComponent {...props} name={name} />;
};

const DomesticAnimal = domesticate(Animal, "Moscow");
const NameAnimal = nameAnimal(DomesticAnimal, "Lolly");
const DomesticAnimalElement /* : React.Element<typeof Animal>  */ = (
  <NameAnimal />
);

console.log("DomesticAnimal", DomesticAnimal);
console.log("NameAnimal", NameAnimal);
console.log("DomesticAnimalElement", DomesticAnimalElement);
