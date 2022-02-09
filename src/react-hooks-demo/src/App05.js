import React, {useEffect, useState} from "react";
import './App.css';

//封装自定义钩子函数
function usePerson(name){
    const [loading, setLoaing] = useState(true)
    const [person, setPerson] = useState({})

    useEffect(() => {
        setLoaing(true);
        setTimeout(() => {
            setLoaing(false)
            setPerson({name})
        }, 3000);

        //effect的返回函数可作为卸载的生命周期函数
        return ()=>{
            console.log("组件被卸载了")
        }
    }, [name])

    return [loading,person]

}

function AsyncPage({name}) {
    // const [loading, setLoaing] = useState(true)
    // const [person, setPerson] = useState({})
    //
    // useEffect(() => {
    //     setLoaing(true);
    //     setTimeout(() => {
    //         setLoaing(false)
    //         setPerson({name})
    //     }, 3000);
    //
    //     //effect的返回函数可作为卸载的生命周期函数
    //     return ()=>{
    //         console.log("组件被卸载了")
    //     }
    // }, [name])

    const [loading,person] = usePerson(name)
    return (
        loading ? <div>Loading</div> : <div>{person.name}</div>
    )
}

function App() {
    const [name, setName] = useState('yxq');
    const [show, setShow] = useState(true);
    const changeName = (name) => {
        setName(name)
    }
    return (
        <div>
            {show ? <AsyncPage name={name}/> : <div>组件已卸载</div>}
            <button onClick={()=>changeName('test')}>将名字改成test</button>
            <button onClick={()=>changeName('t')}>将名字改成t</button>
            <button onClick={()=>setShow(false)}>卸载组件</button>
        </div>
    )
}

export default App;