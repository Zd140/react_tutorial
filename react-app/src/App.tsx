//import Message from "./message";
//import ListGroup from "./components/ListGroup";
//import Alert from "./components/alert";

import Filter from "./components/Filter";


function App() {
  /*let items = ["New York", "Paris", "Totyo", "London", "parts"];
   
  const handleSelectItem = (item: string) =>{
    console.log(item)
  }
*/
  return (
    <div>

      {/* <ListGroup  items={items} heading="Cities"  onSelectItem={handleSelectItem}/>*/}{" "}
     {/*} <Alert>
        Hello <spn>World</spn>
      </Alert>
  {*/}

  <Filter></Filter>
    </div>
  );
}

export default App;
