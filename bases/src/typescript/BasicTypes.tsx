const BasicTypes = () => {
  const name: string = "Danny";
  const age: number = 32;
  const isActive: boolean = true;
  const powers: string[] = ["React", "TypeScript", "NodeJS"];
  return (
    <>
      <h3>Basic Types</h3>
      <p>
        {name} - {age} - {isActive ? "Activo" : "Desactivado"}
      </p>
      {powers.join(", ")}
    </>
  );
};

export default BasicTypes;
