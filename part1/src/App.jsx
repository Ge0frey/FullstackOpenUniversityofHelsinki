const Header = (props) => {
  //console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  //console.log(props)
  return (
    <>
      <p>{props.parts[0].name} {props.parts[0].exercises}</p>
      <p>{props.parts[1].name} {props.parts[1].exercises}</p>
      <p>{props.parts[2].name} {props.parts[2].exercises}</p>
    </>
  )
}

const Total = (props) => {
  //console.log(props)
  return (
    <h3>The total number of exercises is {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}</h3>
  )
}

const App = () => {
  const course = "Half stack application development"

  const parts = [
    {  name: "Fundamentals of React",
      exercises: 10
    },
  
    {
      name: 'Using props to pass data',
      exercises: 7
    },
  
    {
      name: 'State of a component',
      exercises: 14
    }
  
  ]

  return (
    <div>
      <Header course = {course}/>
      <Content parts = {parts} />
      <Total total = {parts} />
    </div>
  )
}

export default App;