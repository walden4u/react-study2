import './App.css';

function App() {
  const name = '리액트';
  return (
    <>
      <h1>Hello {name}</h1>
      <h2>How are you?</h2>
      {name === '리액트' ? <h2>리액트 입니다!</h2> : <h2>리액트가 아닙니다!</h2>}
      {name === '리액트' ? <h2>리액트 입니다!</h2> : null}  
      {name === '리액트' && <h2>리액트 입니다!</h2>}
    </>
  );
}

export default App;
