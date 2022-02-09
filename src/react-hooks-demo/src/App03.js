import React, {useReducer} from "react";
import './App.css';

function App() {
    //useReducer
    const reducer = (state,action)=>{
        const actionFn = {
            add:function (){
                return {
                    ...state,
                    count:state.count+1
                }
            }
        }
        return actionFn[action.type]()
    }

    const [state,dispatch] = useReducer(reducer,{count:0})
    const addCount = () => {
        dispatch({
          type:'add'
      })
    }

    return (
        <div>
            <div>{state.count}</div>
            <button onClick={addCount}>点击加1</button>
        </div>
    );
}

export default App;