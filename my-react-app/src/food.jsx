function Food(){
    const Food1 = "Pizza";
    const Food2 = "Burger";
    return (
        <div>
            <h2>Food Component</h2>
            <ul>
                <li>apple</li>
                <li>{Food1}</li>
                <li>{Food2.toUpperCase()}</li>
            </ul>
        </div>
    );
}
export default Food