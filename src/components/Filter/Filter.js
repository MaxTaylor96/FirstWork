import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";

const Filter = ({ filter, setFilter }) => {
  return (
    <div style={{ margin: "10px 0" }}>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Search..."
      />
      <MySelect
        value={filter.sort}
        onChange={(sortUsers) => setFilter({ ...filter, sort: sortUsers })}
        defaultValue="Sort"
        options={[
          { value: "name", name: "By name" },
          { value: "surname", name: "By surname" }
        ]}
      />
    </div>
  );
};

export default Filter;
