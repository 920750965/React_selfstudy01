import React, {useState, useContext} from "react";
import './App.css';

function App() {
    //useContext共享状态钩子
    const AppContext = React.createContext()

    const Achild = () => {
        const {name} = useContext(AppContext)
        return (
            <div>这是组件a使用的name:{name}</div>
        )
    }

    const Bchild = () => {
        const {name} = useContext(AppContext)
        return (
            <div>这是组件a使用的name:{name}</div>
        )
    }
    return (
        <AppContext.Provider value={{name: "yxq"}}>
            <Achild></Achild>
            <Bchild></Bchild>
        </AppContext.Provider>
    );
}

export default App;