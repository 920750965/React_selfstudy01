import React, {useEffect,useState} from "react";
import './App.css';

function App() {
    const [loading,setLoading] = useState(true)
    //相当于componentDidmount
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },3000);
    })
    return (
        loading?<div>Loading...</div>:<div>加载完毕</div>
    )
}

export default App;