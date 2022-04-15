import "./styles.css";
import { useState, useMemo } from "react";
import List from "./components/List/List";
import MyModule from "./components/UI/module/MyModule";
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import MyButton from "./components/UI/button/MyButton";

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, name: "Max", surname: "Dudnik" },
    { id: 2, name: "Alex", surname: "Dudnik" },
    { id: 3, name: "Dima", surname: "Dudnik" }
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedPosts = useMemo(() => {
    console.log("Success!");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedSearchPost = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.name.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const addUser = (newUser) => {
    setPosts([...posts, newUser]);
    setModal(false);
  };

  const deletePerson = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: "10px" }} onClick={() => setModal(true)}>
        Add new User
      </MyButton>
      <MyModule visible={modal} setVisible={setModal}>
        <Form add={addUser} />
      </MyModule>
      <hr style={{ margin: "10px 0" }} />
      <Filter filter={filter} setFilter={setFilter} />
      {sortedSearchPost.length ? (
        <div>
          {sortedSearchPost.map((post, index) => (
            <List
              delete={deletePerson}
              number={index + 1}
              post={post}
              key={post.key}
            />
          ))}
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>No users found!</h1>
      )}
    </div>
  );
}
