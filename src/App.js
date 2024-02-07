const myName = "mwema";

const todoItems = [
  { title: "learn react", isDone: true },
  { title: "go shopping", isDone: false },
  { title: "learn html", isDone: false },
  { title: "do styling", isDone: false },
];

function App() {
  return (
    <div style={{padding: '1rem', background: 'grey'}}>
      <h1>{myName}'s Todo list</h1>
      <div style={{padding: '1rem'}}>
        {todoItems.map((item) => (
          <>{item.isDone == false && <p>{item.title}</p>}</>
        ))}
      </div>
    </div>
  );
}

export default App;
