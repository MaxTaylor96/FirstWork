import { useState } from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

const Form = ({ add }) => {
  const [user, setUser] = useState({ name: "", surname: "" });

  const addNewUser = (e) => {
    e.preventDefault();
    const newUser = {
      ...user,
      id: Date.now()
    };
    add(newUser);
    setUser({ name: "", surname: "" });
  };

  return (
    <form>
      <MyInput
        style={{ width: "90%" }}
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        type="text"
        placeholder="Name"
      />
      <MyInput
        style={{ width: "90%" }}
        value={user.surname}
        onChange={(e) => setUser({ ...user, surname: e.target.value })}
        type="text"
        placeholder="Surname"
      />
      <MyButton onClick={addNewUser}>Submit</MyButton>
    </form>
  );
};

export default Form;
