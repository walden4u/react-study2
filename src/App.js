import './App.css';
import MyComponent from './component/MyComponent'

function App() {
  const name = '리액트';
  
  return (
    <>
      <h1>Hello {name}</h1>
      <MyComponent name='도우너' />
      <MyComponent />
      <MyComponent>칠드런</MyComponent>
    </>
  );
}

export default App;
