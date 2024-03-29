import { useRef, useState } from "react";
import Counter from "./Counter";
import Hello from "./Hello";
import InputSample from "./InputSample";
import UserList from "./UserList";
import Wrapper from "./Wrapper";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState (
    [
      {
        id: 1,
        username: "velopert",
        email: "public.velopert@gmail.com",
      },
      {
        id: 2,
        username: "tester",
        email: "tester@example.com",
      },
      {
        id: 3,
        username: "liz",
        email: "liz@example.com",
      },
    ]
  )

  const nextId = useRef(4);
  const onCreate = () => {

    const user = {
      id : nextId.current,
      username,
      email
    }
    setUsers([...users, user])

    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }
  return (
    <Wrapper>
      {/*  <Hello name="react" color="red" isSpecial={true}/>
      <Hello color="blue" />
      <Hello name="react4" color="pink" />
      <Hello name="react5" color="orange" isSpecial={true}/>
      <Hello name="react6" color="grey" isSpecial={true}/>
      <Counter />


      <InputSample /> */}
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} />
      <InputSample />
    </Wrapper>
  );
}

export default App;
