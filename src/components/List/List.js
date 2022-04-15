import "./List.css";
import MyButton from "../UI/button/MyButton";

const List = (props) => {
  return (
    <div className="Post">
      <div className="name-wrap">
        <div>{props.number})</div>
        <div className="name">{props.post.name}</div>
        <div className="name">{props.post.surname}</div>
      </div>
      <MyButton onClick={() => props.delete(props.post)}>Delete</MyButton>
    </div>
  );
};

export default List;
