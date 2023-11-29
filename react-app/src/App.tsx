//import Message from "./message";
//import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";

function App() {
  /*let items = ["New York", "Paris", "Totyo", "London", "parts"];
   
  const handleSelectItem = (item: string) =>{
    console.log(item)
  }
*/
  return (
    <div>
      {/* <ListGroup  items={items} heading="Cities"  onSelectItem={handleSelectItem}/>*/}{" "}
      <Alert>
        Hello <spn>World</spn>
      </Alert>

    </div>
  );
}

export default App;
