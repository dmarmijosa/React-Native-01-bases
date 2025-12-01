export interface Person {
  age: number;
  firstName: string;
  lastName: string;
  address: Address;
}

export interface Address {
  country: string;
  houseNumber: number;
}

const ObjectLiterals = () => {
  const person: Person = {
    age: 32,
    firstName: "Danny",
    lastName: "Armijos",
    address: {
      country: "Spain",
      houseNumber: 1234,
    },
  };
  return (
    <>
      <h3>Objetos literales</h3>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};

export default ObjectLiterals;
