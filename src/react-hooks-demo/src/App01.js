import React,{useState} from "react";
import './App.css';

function App() {
    //useState创造一个状态，赋值一个初始值，当前赋值的初始值是0
    //数组的第一个是一个变量，此变量的值指向当前状态的值  相当于this.state
    //数组的第二个是一个函数，此函数可以修改状态的值    相当于this.setState
    const [count,setCount] = useState(0)
    const addCount = ()=>{
        setCount(count+1)
    }
    return (
        <div className="App">
            <div>{count}</div>
            <button onClick={addCount}>点击加1</button>
        </div>
    );
}

export default App;
