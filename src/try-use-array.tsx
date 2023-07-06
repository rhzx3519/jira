import { useMount, useArray } from "./screens/utils";

interface Person {
  name: string;
  age: number;
}

export const TsReactTest = () => {
  const persons: Person[] = [
    { name: "jack", age: 25 },
    { name: "ma", age: 22 },
  ];
  const { value, clear, removeIndex, add } = useArray<Person>(persons);
  useMount(() => {
    // console.log(value.notExist);
    // add({ name: "david" })
    // removeIndex("123")
  });

  return (
    <div>
      <button onClick={() => add({ name: "john", age: 23 })}>add john</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button style={{ marginBottom: "50px" }} onClick={() => clear()}>
        clear
      </button>
      {value.map((person: Person, index: number) => (
        <div style={{ marginBottom: "30px" }}>
          <span style={{ color: "red" }}>{index}</span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
    </div>
  );
};
