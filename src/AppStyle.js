import './App.css';

function App() {
  const name = '리액트';
  const name2 = undefined;
  const style = {
    // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됩니다.
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px', // font-size -> fontSize
    fontWeight: 'bold', // font-weight -> fontWeight
    padding: 16 // 단위를 생략하면 px로 지정됩니다.
  };
  
  return (
    <>
      <h1 style={style}>Hello!!! {name}</h1>
      <h2>How are you?</h2>
      {name === '리액트' ? <h2>리액트 입니다!</h2> : <h2>리액트가 아닙니다!</h2>}
      {name === '리액트' ? <h2>리액트 입니다!</h2> : null}  
      {name === '리액트' && <h2>리액트 입니다!</h2>}

      <h2>{name2}</h2>
      <h2>{name2 || '리액트'}</h2>
    </>
  );
}

export default App;
