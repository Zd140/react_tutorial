import Message from "./message";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Paris", "Totyo", "London", "parts"];

  return (
    <div>
      <ListGroup  items={items} heading="Cities"/>
    </div>
  );
}

export default App;
