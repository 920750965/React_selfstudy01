// import logo from './logo.svg';
import React, {Component} from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import './App.css';

export default class App extends Component {
    //初始化状态
    state = {
        todos: [
            {id: '001', name: '吃饭', done: true},
            {id: '002', name: '睡觉', done: true},
            {id: '003', name: '打代码', done: false},
            {id: '004', name: '逛街', done: false},
        ]
    }

    addTodo = (todoObj) => {
        //获取原todos
        const {todos} = this.state
        //追加todo
        const newTodos = [todoObj, ...todos]
        //更新状态
        this.setState({todos: newTodos})
    }

    //传给Item-->先传给父亲List 用于更新一个todo对象的done值
    updateTodo = (id, done) => {
        const {todos} = this.state
        //匹配处理数据
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) return {...todoObj, done: done}
            else return todoObj
        })
        this.setState({todos: newTodos})
    }

    deleteTodo = (id) => {
        const {todos} = this.state
        //删除指定id的todo对象
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id != id
        })
        //更新状态
        this.setState({todos:newTodos})
    }

    checkAllTodo = (done) => {
        //获取原来的todos
        const {todos} = this.state
        //加工数据
        const newTodos = todos.map((todoObj)=>{
            return{...todoObj,done:done}
        })
        this.setState({todos: newTodos})
    }

    clearAllDone = () => {
        //获取原来的todos
        const {todos} = this.state
        //过滤数据
        const newTodos = todos.filter((todoObj)=>{
            return !todoObj.done
        })
        this.setState({todos: newTodos})
    }

    render() {
        const {todos} = this.state
        return (
            <div id="root">
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addTodo={this.addTodo}/>
                        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                        <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                    </div>
                </div>
            </div>
        );
    }
}
