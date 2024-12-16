import Container from "./container"
import Destination from "./Destination"
import Fruits from "./Fruits"
import Greeting from "./Greeting"
import Item from "./Item"
import List, { FilteredList } from "./List"
import Mailbox from "./Mailbox"

function HelloWorld() {
  return (
    <div>
        <h1>Hello World</h1>
    </div>
  )
}

function Message() {
  const name = "HI"
  return <h1>HELLO {name}</h1>
}

function Write() {
  return <input type="input" maxLength={5} style={{backgroundColor : "orange"}}></input>
}


function App() {

    const fruits = ["Apple"];

    const destinations = [
      {
        place: "파리",
        description: "여행지역"
      }
    ]

    return (
      <div>
        <Container>여행지역</Container>
        <Greeting name={"WEWE"}/>
        <Destination {...destinations[0]}/>
        <Destination/>
        <HelloWorld/>
        <Item isDone={true}/>
        <Message/>
        <Write/>
        <Mailbox unreadMessage={["hi"]}/>
        {fruits.length > 0 && <Fruits fruits={fruits}/>}
        <List/>
        <FilteredList/>
      </div>
    )
}

export default App
