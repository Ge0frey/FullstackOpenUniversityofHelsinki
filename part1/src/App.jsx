const App = () => {
  const friends = [
    {name: "Geofrey", age: 22},
    {name: "James", age: 25}
  ]
  console.log(friends)

  return (
    <>
      <p>My name is {friends[0].name} and I am {friends[0].age} years old.</p>
      <p>My name is {friends[1].name} and I am {friends[1].age} years old.</p>
    </>
  )
}

export default App;