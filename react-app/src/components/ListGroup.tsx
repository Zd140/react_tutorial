function ListGroup() {
  let items = ["New York", "Paris", "Totyo", "London", "parts"];

  return (
    <>
      <h1>list items</h1>
      <ul className="list-group">
        {items.map((items) => (
          <li
            className="list-group-item "
            key={items}
            onClick={() => console.log(items )}
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
