const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>Hello {props.name} and I am {props.age} years old</p>
    </div>  
  )
}

const App = () => {
  const name = "peter";
  const age = 25;

  return (
    <div>
      <h1>GREETINGS</h1>
      <Hello name = "Geofrey" age = "20"/>
      <Hello name = {name} age = {age}/>
    </div>
  )
}

export default App