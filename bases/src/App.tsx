import "./App.css";
import Counter from "./components/Counter";
// import BasicFunctions from "./typescript/BasicFunctions";
// import ObjectLiterals from "./typescript/ObjectLiterals";
// import BasicTypes from "./typescript/BasicTypes";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl mb-5">React + Typescript</h1>
      {/* <BasicTypes /> */}
      {/* <ObjectLiterals /> */}
      {/* <BasicFunctions /> */}
      <Counter />
    </div>
  );
}

export default App;
