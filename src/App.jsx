import Container from "./container"
import Destination from "./Destination"
import Greeting from "./Greeting"

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
        <Message/>
        <Write/>
      </div>
    )
}

export default App
