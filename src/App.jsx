import { useState } from "react"
import Alert from "./Alert"
import Container from "./container"
import Destination from "./Destination"
import Form from "./Form"
import Fruits from "./Fruits"
import Greeting from "./Greeting"
import Item from "./Item"
import List, { FilteredList } from "./List"
import Mailbox from "./Mailbox"
import Propagation from "./Propagation"

function Counter() {
  const [count, setCount] = useState(0);
  return(
    <div>
        state: {count}
        <button onClick={ () => {
             setCount(pre => pre + 1); 
             setCount(pre => pre + 1); 
             setCount(pre => pre + 1); 
        }}>
            Update
        </button>
    </div>
  )   
} 


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

    const [count, setCount] = useState(0);

    const fruits = ["Apple"];

    const destinations = [
      {
        place: "파리",
        description: "여행지역"
      }
    ]

    const handleUpdate = () => {
        setCount(count + 1);
    }

    return (
      <div>
        <Counter/>
        State: {count}
        <button onClick={handleUpdate}>Update</button>
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
        <Alert onAlert={() => alert('hello')}/>
        <Form/>
        <Propagation/>
      </div>
    )
}

export default App
