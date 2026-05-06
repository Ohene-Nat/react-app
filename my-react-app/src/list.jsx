function List() {
  const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

  const listItems = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);
  return (<ol>{listItems}</ol>);
}
export default List;