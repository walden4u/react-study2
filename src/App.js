import './App.css';
import MyComponent from './component/MyComponentC'

function App() {
  const name = '리액트';
  
  return (
    <>
      <h1>Hello {name}</h1>
      <MyComponent />
    </>
  );
}

export default App;
