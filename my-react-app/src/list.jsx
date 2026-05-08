function List() {
  const fruits = [{id: 1, name:"Apple", calories: 95}, 
    {id: 2, name:"Banana", calories: 105},
    {id: 3, name:"Pear", calories: 50}, 
    {id: 4, name:"Date", calories: 160}, 
    {id: 5, name:"Elderberry", calories: 100}];

  // fruits.sort((a, b) => a.calories - b.calories);  
  // fruits.sort((a, b) => a.name.localeCompare(b.name));  

  const localFruits = fruits.filter((fruit) => fruit.calories >  100);

  const listItems = localFruits.map((localFruit) => <li key={localFruit.id}>{localFruit.name}: &nbsp;{localFruit.calories} calories</li>);
  return (<ol>{listItems}</ol>);
}
export default List;